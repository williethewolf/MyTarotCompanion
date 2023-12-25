import { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated, PanResponder, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import styles from '../../styles';
//Message for empty deck currently not in use
//import EmptyDeckAnimatedText from './components/EmptyDeckAnimatedText';
//deck data and assets
import tarotCards from '../../data/tarotCards';
import backofCards from "../../assets/decks/riderTarot/BackofDeck.svg";

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
  
  const drawCard = (index) => {
    if (currentDeck.current.length === 0) {
      setIsDeckEmpty(true);
      setShowEmptyDeckMessage(true);
      setTimeout(() => setShowEmptyDeckMessage(false), 1000);
      return;
    }
    
    const card = { ...currentDeck.current.shift(), reversed: Math.random() < 0.5 };
    const cardKey = `card${index + 1}`;
    setDrawnCards(prevDrawnCards => ({
      ...prevDrawnCards,
      [cardKey]: card
    }));
  
    if (currentDeck.current.length === 0) {
      setIsDeckEmpty(true);
    }
  };

  const resetDeck = () => {
    setDrawnCards({ card1: null, card2: null, card3: null });
    nextZoneRef.current=0;
    setIsDeckEmpty(false);
    currentDeck.current=[...tarotCards];
    shuffleDeck()
  };

  //INTERACTIONS
  //DROP ZONE LOGIC
  // Function to capture layout of drop zones
  const onDropZoneLayout = (event, index) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    const offsetY = containerLayout.y;
    console.log(`Drop Zone ${index}: x=${x}, y=${y}, width=${width}, height=${height}`);
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
    console.log("Container layout: ", { x, y, width, height });
  };

   // Function to render meanings for each drawn card
   const renderCardMeanings = (cardKey) => {
    const card = drawnCards[cardKey];
    if (!card) {
      return (
      <View style={styles.cardMeaningsCard}>
      <View style={[flex=0.3,width=95]}>
          <Text></Text>
        </View>
      </View>
    )};

    const meanings = card.reversed ? card.reversedMeaning : card.meaning;
    return (
      <ScrollView style={styles.cardMeaningsCard}>
        {meanings.map((meaning, index) => (
          <Text key={index} style={styles.cardMeaningText}>{meaning}</Text>
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
  
        // Define thresholds
        const swipeDistanceThreshold = 50; // Adjust as needed
        const swipeVelocityThreshold = 0.5; // Adjust as needed
        const tapDistanceThreshold = 5; // Adjust as needed
  
        if (verticalMovement > swipeDistanceThreshold && verticalVelocity > swipeVelocityThreshold) {
          // It's a swipe
          handleSwipeUp();
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

  return (
    <View style={styles.container}>
    {/* Dealing Deck view */}
   
      {/* Empty Deck Message - TEMPORARILY DISABLED */}
      {/*<EmptyDeckAnimatedText isVisible={showEmptyDeckMessage} />*/}
       {/* Card Drop Zones */}
    <View style = {styles.threeTarotSpreadContainer} onLayout={onContainerLayout}>
      {Object.keys(drawnCards).map((key, index) => (
        <View key={key} style={[styles.dropZone,{ backgroundColor: 'lightblue' }]} onLayout={(e) => onDropZoneLayout(e, index)}>
          <Text>{drawnCards[key] ? `${drawnCards[key].name} ${drawnCards[key].reversed ? '(Reversed)' : ''}` : `Drop here`}</Text>
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
          <Image source={backofCards} style={styles.cardBackImage} />
        </Animated.View>
        )}
        </View>
      {/* Reset Button */}
        <TouchableOpacity onPress={resetDeck} style={styles.pillButton}>
          <Text style={styles.pillButtonText}>Read</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Tarot