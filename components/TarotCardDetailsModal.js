import React, {useRef, useEffect, useState} from 'react';
import { Modal, View, TouchableOpacity, Text, Animated, Image, StyleSheet, ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

const TarotCardDetailsModal = ({ isVisible, card, onClose, onReverse, }) => {
  if (!card) return null;

  const [isReversed, setIsReversed] = useState(card.reversed);
  //Card reverseAnim
  const reverseAnim = useRef(new Animated.Value(card.reversed ? 180 : 0)).current;

  const meaningsScrollViewRef = useRef(null)

  useEffect(() => {
    // Update the isReversed state to match the card's reversed state.
    setIsReversed(card.reversed);
    
    // Set the initial value for the animation, with no animation.
    const initialValue = card.reversed ? 180 : 0;
    reverseAnim.setValue(initialValue);
  }, [card]);
  
  // useEffect(() => {
  //   // Ensure this useEffect only triggers animation when isReversed is not null (i.e., after a button press)
  //   if (isReversed !== null) {
  //     Animated.timing(reverseAnim, {
  //       toValue: isReversed ? 180 : 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // }, [isReversed]);


  const reverseCardContainerStyle = {
    transform: [
      {
        rotateZ: reverseAnim.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const handleReverseButtonPress = () => {
    setIsReversed(currentReversed => {
      const newReversed = !currentReversed;
      
      Animated.timing(reverseAnim, {
        toValue: newReversed ? 180 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Call onReverse callback after animation completes
        onReverse();
      });
  
      meaningsScrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
      return newReversed;
    });
  };

  // Get the meanings based on the reversed state
  const meanings = isReversed ? card.reversedMeaning : card.meaning;

  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.cardContainer, reverseCardContainerStyle]}>
          <Image source={card.image} style={styles.cardImage} />
        </Animated.View>
        <TouchableOpacity style={styles.reverseButton} onPress={handleReverseButtonPress}>
          <Text style={styles.buttonText}>Reverse</Text>
        </TouchableOpacity>
        {/* Horizontal ScrollView for Meanings */}
        <ScrollView
          horizontal
          style={styles.meaningsContainer}
          contentContainerStyle={styles.meaningsContentContainer} // Apply content container styles here
          ref={meaningsScrollViewRef}
        >
          {meanings.map((meaning, index) => (
            <View key={index} style={styles.meaningItem}>
              <Text style={styles.meaningText}>{meaning}</Text>
            </View>
          ))}
        </ScrollView>

        <ScrollView style={styles.descriptionContainer}>
          <View style={styles.descriptionText}>
          <Markdown >{card.description}</Markdown>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardImage: {
    //width: 340,
    //height: 510,
    height:'100%',
    resizeMode: 'contain',
    marginHorizontal:-15,
  },
  cardImageReversed: {
    //width: 300,
    //height: 450,
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }],
  },
  cardContainer: {
    marginTop:30,
    flex:3,
    margin: -20,
    paddingVertical:12,
    borderRadius: 20,
    backgroundColor: 'white',
    // Shadows for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    // Elevation for Android
    elevation: 4,
  },
  reverseButton: {
    alignSelf: 'center',
    bottom: 10, // Adjust this value as needed for overlap
    backgroundColor: '#c4ae7e',
    padding: 10,
    borderRadius: 30,
    // Add shadow to the button for more depth
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, // for Android
  },
  buttonText: {
    color: 'white',
  },
  meaningsContainer: {
    width: '95%',
    maxHeight: 30,
    marginTop: 5, // Add some margin at the top for spacing
  },
  meaningsContentContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'flex-start', // Align items to start to handle varying heights
    
  },
  meaningItem: {
    //bottom:50,
    marginHorizontal: 10, // Add horizontal margin for spacing between items
    backgroundColor: '#f5e5ba', // Button color
    paddingHorizontal: 6, // Horizontal padding
    paddingVertical: 4,
    borderRadius: 60, // Rounded corners
    color: '#006994', // Text color
    fontSize: 12, // Font size
    overflow: 'hidden', // Prevents content from spilling outside the borders
  },
  meaningText: {
    color: '#006994', // Text color
    textAlign: 'center', // Center text
  },
  descriptionContainer: {
    width: '95%',
    maxHeight: 225, // Set a fixed maximum height
    backgroundColor: '#f8f8f8', // Background color of the text area
    marginVertical: 10, // Vertical spacing
    padding: 10, // Padding inside the text area
    borderRadius: 30,
    padding:10,
    paddingBottom:40,
  },
  descriptionText: {
    padding:10,
    paddingBottom:25,
    fontSize: 16, // Font size of the description text
    color: '#333', // Text color
    //Add any additional text styling here
  },
});

export default TarotCardDetailsModal;