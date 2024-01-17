import { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated, PanResponder, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles';
//Message for empty deck currently not in use
//import EmptyDeckAnimatedText from './components/EmptyDeckAnimatedText';
//deck data and assets
import tarotCards from '../../data/tarotCards';
import backofCards from "../../assets/decks/riderTarot/BackofDeck.svg";

//Imports for card selection modals
import TarotCardSelectionModal from '../../components/TarotCardSelectionModal';

const Tarot= () => {
  //Define drop area limits
  const dropZoneLayouts = useRef([]).current;
  const [containerLayout, setContainerLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });  
  //Deck in use
  const currentDeck = useRef([...tarotCards]);
  //Hand dealt
  const [drawnCards, setDrawnCards] = useState({ card1: null, card2: null, card3: null });
  //To avoid issues after deck is "empty"
  const [isDeckEmpty, setIsDeckEmpty] = useState(false);
  const [showEmptyDeckMessage, setShowEmptyDeckMessage] = useState(false);
  //handling dragging dealing the cards
  const [isDragging, setIsDragging] = useState(false);
  //drag animation ref to determine where its being held
  const pan = useRef(new Animated.ValueXY()).current;
  //auto dealing ref
  const nextZoneRef = useRef(0);
  //Card scaling animation WIP

  //making the transition between cards cleaner and smoother
  const [hasCardBeenDealt, setHasCardBeenDealt] = useState({
    card1: false,
    card2: false,
    card3: false
  });


  //Card selection modal states and hooks
  // Ref to keep track of the latest selectedCardForDealing
  const selectedCardRef = useRef(selectedCardForDealing);
  const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);
  const [selectedCardForDealing, setSelectedCardForDealing] = useState(null);
  

  //DECK OPERATIONS
  const shuffleDeck = () => {
    let newShuffledDeck = [...currentDeck.current]; // Clone the current deck
    for (let i = newShuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newShuffledDeck[i], newShuffledDeck[j]] = [newShuffledDeck[j], newShuffledDeck[i]];
    }
    currentDeck.current = newShuffledDeck;
    //console.log('Deck shuffled', currentDeck.current);
  };

  useEffect(() => {
    shuffleDeck();  // Shuffle the deck when the component mounts so cards are randomized from the start
}, []);
  
useEffect(() => {
  selectedCardRef.current = selectedCardForDealing;
}, [selectedCardForDealing]);


const drawCard = (index) => {
  const cardKey = `card${index + 1}`;
  if (selectedCardRef.current) {
    // Deal the selected card
    setDrawnCards(prevDrawnCards => ({
      ...prevDrawnCards,
      [cardKey]: { ...selectedCardRef.current }
    }));
    // Remove the dealt card from the deck
    //I DONT THINK THIS IS THE RIGHT WAY, WE Cant modify the current deck which is why we were using an index. Best we we can do is store the index and ignore it.
    //currentDeck.current = currentDeck.current.filter(c => c.name !== selectedCardForDealing.name);
    // Reset the selected card
    setSelectedCardForDealing(null);
  } else {
    // Draw a card from the deck normally
    if (currentDeck.current.length === 0) {
      setIsDeckEmpty(true);
      setShowEmptyDeckMessage(true);
      setTimeout(() => setShowEmptyDeckMessage(false), 1000);
      return;
    }
    
    setHasCardBeenDealt(prevState => ({ ...prevState, [cardKey]: true }));
    setDrawnCards(prevDrawnCards => ({
      ...prevDrawnCards,
      [cardKey]: null
    }));

    const newCard = { ...currentDeck.current.shift(), reversed: Math.random() < 0.5 };
    setTimeout(() => { // Set the new card after a brief delay
      setDrawnCards(prevDrawnCards => ({
        ...prevDrawnCards,
        [cardKey]: newCard
      }));
    }, 100);
  }
  if (currentDeck.current.length === 0) {
    setIsDeckEmpty(true);
  }
  // Reset the back of the card image -THIS IS NOT NEEDED IF ITS CALLED ABOVE IN LINE 77
  //resetBackOfCardImage();
};

//THIS IS NOT NEEDED EITHER
// const resetBackOfCardImage = () => {
//   setSelectedCardForDealing(null)
// };

  const resetDeck = () => {
    setDrawnCards({ card1: null, card2: null, card3: null });
    nextZoneRef.current=0;
    setIsDeckEmpty(false);
    setSelectedCardForDealing(null)
    currentDeck.current=[...tarotCards];
    shuffleDeck()

    setHasCardBeenDealt({
      card1: false,
      card2: false,
      card3: false
    });
  };

  //INTERACTIONS
  //DROP ZONE LOGIC
  // Function to capture layout of drop zones
  const onDropZoneLayout = (event, index) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    const offsetY = containerLayout.y;
    //console.log(`Drop Zone ${index}: x=${x}, y=${y}, width=${width}, height=${height}`);
    // Ensure the array at this index is defined
    if (!dropZoneLayouts[index]) {
      dropZoneLayouts[index] = {};
    }
    // Update the specific index with layout information
    dropZoneLayouts[index] = { x, y: y - offsetY, width, height };
  };

  const onContainerLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setContainerLayout({ x, y, width, height });
    //console.log("Container layout: ", { x, y, width, height });
  };

   // Function to render meanings for each drawn card
  const renderCardMeanings = (cardKey) => {
    const card = drawnCards[cardKey];
    if (!card) {
      return (
      <View style={styles.cardMeaningsCard}>
      <View style={[flex=0.33,width=95]}>
          <Text></Text>
        </View>
      </View>
    )};

    const meanings = card.reversed ? card.reversedMeaning : card.meaning;
    return (
      <ScrollView style={styles.cardMeaningsCard}>
        {meanings.map((meaning, index) => (
          <Text key={index} style={[styles.cardMeaningText,flex=0.3]}>{meaning}</Text>
        ))}
      </ScrollView>
    );
  };
  //GESTURE INTERACTIONS
  const handleSwipeUp = () => {
    drawCard(nextZoneRef.current);
    nextZoneRef.current = (nextZoneRef.current + 1) % 3; // Cycle through 0, 1, 2
    pan.setValue({ x: 0, y: 0 });
    pan.flattenOffset();
    setIsDragging(false);
  };

  const handleSwipeDown = () => {
    setIsTypeModalVisible(true)
    pan.setValue({ x: 0, y: 0 });
    pan.flattenOffset();
    setIsDragging(false);
  }

  const handleDragRelease = (gestureState) => {
    // Adjust dropY to be relative to the container
    const dropX = gestureState.moveX;
    const dropY = gestureState.moveY - containerLayout.y;
  
    const droppedZone = checkDropZone(dropX, dropY);
  
    if (droppedZone !== -1) {
      drawCard(droppedZone);
      pan.setValue({ x: 0, y: 0 });
    } else {
      // Spring back if not dropped in a valid zone
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }).start();
    }
    pan.flattenOffset();
    setIsDragging(false);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        setIsDragging(true);
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        const verticalMovement = Math.abs(gestureState.dy);
        const verticalVelocity = Math.abs(gestureState.vy);
        const { dy, dx, vy } = gestureState;
        const swipeThreshold = 50;
  
        // Define thresholds
        const swipeDistanceThreshold = 50; // Adjust as needed
        const swipeVelocityThreshold = 0.3; // Adjust as needed
        const tapDistanceThreshold = 5; // Adjust as needed
  
        if (verticalMovement > swipeDistanceThreshold && Math.abs(vy) > swipeVelocityThreshold) {
          if (dy < 0) {
            // Upward swipe
            handleSwipeUp();
          } else {
            // Downward swipe
            handleSwipeDown();
          }
        } else if (verticalMovement < tapDistanceThreshold && Math.abs(gestureState.dx) < tapDistanceThreshold) {
          // It's a tap
          shuffleDeck();
        } else {
          // It's a drag and drop
          handleDragRelease(gestureState);
        }
  
        pan.flattenOffset();
        setIsDragging(false);
      }
    })
  ).current;

  const checkDropZone = (x, y) => {
    const droppedZone = dropZoneLayouts.findIndex(
      layout => x >= layout.x && x <= layout.x + layout.width &&
                y >= layout.y && y <= layout.y + layout.height
    );
    return droppedZone;
  };

  const reversedCardStyle = {
    transform: [{ rotate: '180deg' }]
  }

  //CARD SELECTOR MODALS AND LOGIC
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    //setIsTypeModalVisible(false);
    setIsCardSelectionModalVisible(true);
  };

  const handleCardSelected = (card) => {
    setSelectedCardForDealing(card);
    // Close the modal and reset the view for the next time it opens
    setIsTypeModalVisible(false);
    // Remove the selected card from the deck - THIS IS MESSING IT UP! JUST TAKE IT OUT
    //currentDeck.current = currentDeck.current.filter(c => c.name !== card.name);
  };


  return (
    <View style={styles.container}>
    {/* Dealing Deck view */}
   
      {/* Empty Deck Message - TEMPORARILY DISABLED */}
      {/*<EmptyDeckAnimatedText isVisible={showEmptyDeckMessage} />*/}
       {/* Card Drop Zones */}
    <View style = {styles.threeTarotSpreadContainer} onLayout={onContainerLayout}>
      {Object.keys(drawnCards).map((key, index) => (
        <View key={key} style={[styles.dropZone,]} onLayout={(e) => onDropZoneLayout(e, index)}>
         {drawnCards[key] ? (
          // <View>
          <View style={styles.cardImageContainer}>
            <Image
              source={drawnCards[key].image}
              placeholder={backofCards}
              transition={500}
              alt={drawnCards[key].name}
              style={drawnCards[key].reversed ? [styles.cardImage, reversedCardStyle] : styles.cardImage}
            />
           
        {/* </View> */}
          <View style={styles.cardLabel}>
            <Text style={{flex:1,flexWrap:'nowrap', fontSize:12}}>{drawnCards[key].name}</Text>
          </View>
        
        </View>
    ) : (
      hasCardBeenDealt[key] ? (
        <View style={styles.cardImageContainer}>
        <Image source={backofCards}  placeholder={backofCards} style={styles.cardImage} />
        </View>
      ) : (
        <Text>Drop here</Text>
      )
    )}
        </View>
      ))}
    </View>
    <View style = {styles.threeTarotSpreadLables}>
        <Text style = {styles.threeTarotSpreadLable}>Past</Text>
        <Text style = {styles.threeTarotSpreadLable}>Present</Text>
        <Text style = {styles.threeTarotSpreadLable}>Future</Text>
    </View>
    <View style = {styles.cardMeaningsContainer}>
        {renderCardMeanings('card1')}
        {renderCardMeanings('card2')}
        {renderCardMeanings('card3')}
    </View>
    {/*Lower bottom interactionables */}
    <View style={styles.deckControls}>
      <TouchableOpacity onPress={resetDeck} style={styles.pillButton}>
        <Text style={styles.pillButtonText}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.dealingDeck}>
    {/* Static Deck - Visible only when deck is not empty */}
    {/* Static Card or Placeholder */}
        {!isDeckEmpty ? (
          <Image source={backofCards} style={styles.topDeckCard} />
        ) : (
          <View style={styles.cardPlaceholder} />
        )}

      {/* Draggable Card */}
      {!isDeckEmpty && (
        <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.draggableCard, isDragging && styles.draggingCard]}
      >
        <Image source={selectedCardForDealing ? selectedCardForDealing.image : backofCards} style={styles.cardBackImage} />
      </Animated.View>
        )}
        </View>
          <View style={styles.cardSelectionArea}>
      {/* Reset Button */}
        <TouchableOpacity onPress={resetDeck} style={styles.pillButton}>
          <Text style={styles.pillButtonText}>Read</Text>
        </TouchableOpacity>
      </View>

      <TarotCardSelectionModal
        isVisible={isTypeModalVisible}
        onSelectType={handleTypeSelect}
        onClose={() => {setIsTypeModalVisible(false)}}
        tarotCards={tarotCards}
        onCardSelected={handleCardSelected}
        style={styles.typeModalContainer}
      />
      </View>

    </View>
  );
}

export default Tarot