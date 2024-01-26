import React, {useState, useEffect, useRef } from 'react';
import { Modal, View, TouchableOpacity, ScrollView, Text, Image, Animated, StyleSheet } from 'react-native';
import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

import cupsSuitSmall from '../assets/decks/suitsIcons/cupsSuitSmall.png'
import wandsSuitSmall from '../assets/decks/suitsIcons/wandsSuitSmall.png'
import swordsSuitSmall from '../assets/decks/suitsIcons/swordsSuitSmall.png'
import pentaclesSuitSmall from '../assets/decks/suitsIcons/pentaclesSuitSmall.png'
import tarotMajorArcana from '../assets/decks/suitsIcons/tarotMajorArcanaSmall.png'

const typeToImageMap = {
    'major arcana': tarotMajorArcana,
    'cups': cupsSuitSmall,
    'wands': wandsSuitSmall,
    'swords': swordsSuitSmall,
    'pentacles': pentaclesSuitSmall,
  };

const TarotCardSelectionModal = ({ isVisible, onClose, tarotCards, onCardSelected }) => {

    const [selectedType, setSelectedType] = useState(null);

    const scrollViewRef = useRef()


    const handleTypeSelect = (type) => {
        setSelectedType(type);
        scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true})
      };

      const animationValues = {
        cups: new Animated.Value(0),
        wands: new Animated.Value(0),
        'major arcana': new Animated.Value(0),
        swords: new Animated.Value(0),
        pentacles: new Animated.Value(0),
    };

    useEffect(() => {
        if (selectedType) {
            Animated.timing(animationValues[selectedType], {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }).start();
        }
        // Reset other animations
        Object.keys(animationValues).forEach(type => {
            if (type !== selectedType) {
                Animated.timing(animationValues[type], {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        });
    }, [selectedType]);

    const getButtonStyle = (type) => {
        return {
            transform: [
                {
                    scale: animationValues[type].interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.1], // Adjust scale from 1 to 1.1
                    }),
                },
                {
                    translateY: animationValues[type].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -10], // Adjust translateY from 0 to -10
                    }),
                },
            ],
        };
    };

    const renderTypeSelection = () => (
          <View style={styles.typeSelectionContainer}>
            {/* Row for type buttons */}
            <View style={styles.buttonRow}>
              {['cups', 'wands', 'major arcana', 'swords', 'pentacles'].map((type) => (
                <Animated.View key={`animated-${type}`} style={[styles.roundButtonContent, getButtonStyle(type)]}>
                <TouchableOpacity
                    onPress={() => handleTypeSelect(type)}
                    style={[styles.roundButton]}
                >
                
                    <Image source={typeToImageMap[type]} style={styles.buttonImage} />
                </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
      
            {/* Row for close button */}
            <View style={styles.closeButtonRow}>
              <TouchableOpacity style={styles.closeButton} onPress={() => {onClose(); setSelectedType(null);}}>
                <Text style={{color:'white', fontSize:scaleSize(10)}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
      );

      const renderCardSelection = () => {
        const cards = tarotCards.filter(card => card.type === selectedType);
        return (
          <ScrollView horizontal style={styles.cardSelectionContainer} ref={scrollViewRef}>
            <View style={{flexDirection:'row', margin:15}}>
            {cards.map((card) => (
              <TouchableOpacity
                key={card.name}
                style={styles.cardTouchable}
                onPress={() => {
                  onCardSelected(card);
                  onClose();  // Optionally close the modal upon card selection
                  setSelectedType(null);
                }}
              >
                <Image source={card.image} style={styles.cardImage} />
                <View style={{ flex:1, alignItems: 'center' }}>
                  <Text style={{ fontSize: 12, textAlign: 'center', paddingBottom:-25 }}>{card.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
            </View>
          </ScrollView>
        );
      };

      return (
        <Modal transparent visible={isVisible} onRequestClose={() => {onClose(); setSelectedType(null);}}>
            <View style={styles.modalContainer}>
                {'cardSelection' && renderCardSelection()}
                {renderTypeSelection()}
            </View>
        </Modal>
      );
};

const styles = StyleSheet.create({
    
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align content to the bottom
        alignItems: 'center', // Center content horizontally
        position: 'absolute', // Position it over other content
        bottom: isTablet? scaleSize(60) : scaleSize(75),
        left: -5,
        right: 10,
    },
    typeSelectionContainer:{
        flexDirection: 'column', // Stack rows vertically
        alignItems: 'center', // Center the rows
        justifyContent: 'space-around', // or 'space-between'
        padding: scaleSize(10), // Adjust as needed
    },
    roundButton: {
        width: scaleSize(70), // Increase size for better visibility and touch
        height: scaleSize(70),
        backgroundColor:'white',
        borderRadius: scaleSize(45), // Half of width/height to make it round
        margin: scaleSize(5), // Space between buttons
        overflow: 'hidden', // To make sure the image respects the border radius
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
        borderWidth:scaleSize(2),
        borderColor: '#c4ae7e',
         // Shadows for iOS
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: scaleSize(2),
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        // Elevation for Android
        elevation: 4,
    },
    roundButtonContent: {
        width: scaleSize(70), // Increase size for better visibility and touch
        height: scaleSize(70),
        backgroundColor:'white',
        borderRadius: scaleSize(45), // Half of width/height to make it round
        overflow: 'hidden', // To make sure the image respects the border radius
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
        margin: scaleSize(5),
          // Shadows for iOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.85,
          // Elevation for Android
          elevation: 8,

    },
    activeRoundButton: {
        width: scaleSize(80),
        height: scaleSize(80),
        borderRadius: scaleSize(40),
        margin: scaleSize(5),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        borderWidth: scaleSize(2),
        borderColor: '#c4ae7e',
        transform: [{ translateY: -scaleSize(10) }],
            // Shadows for iOS
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        // Elevation for Android
        elevation: 8,
    },
    buttonImage: {
        width: '100%', // Image takes the full space of the button
        height: '100%', // Maintain aspect ratio
        borderRadius: scaleSize(50) // Make image round
    },
    buttonRow: {
        flexDirection: 'row', // Align type buttons horizontally
        justifyContent: 'space-around', // Space out the buttons evenly
        gap:25,
    },
    closeButtonRow: {
        flexDirection: 'row', // Even though it's just one button, this keeps it consistent
        justifyContent: 'center', // Center the close button horizontally
    },
    cardSelectionContainer: {
        flex:1,
        flexDirection: 'row',
        //paddingVertical: 10,
      },
      cardTouchable: {
        backgroundColor:'white',
        flex:1,
        //aspectRatio : 1 /1.87,
        height:scaleSize(210),
        width: scaleSize(120),
        borderRadius:scaleSize(8),
        marginHorizontal: scaleSize(5),
         // Shadows for iOS
         shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 1,
         // Elevation for Android
         elevation: 6,
      },
      cardImage: {
        height: '85%',
        width: '100%',
        resizeMode: 'contain',
        marginTop:scaleSize(10)
      },
      modalContent: {
        flex: 1,
        justifyContent: 'flex-end', // Align content to the bottom
        alignItems: 'center',       // Center content horizontally
    },
    closeButton: {
        width: scaleSize(50), // Increase size for better visibility and touch
        height: scaleSize(50),
        borderRadius: scaleSize(45), // Half of width/height to make it round
        margin: scaleSize(5), // Space between buttons
        overflow: 'hidden', // To make sure the image respects the border radius
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
        borderWidth:scaleSize(2),
        borderColor: '#c4ae7e',
        backgroundColor: '#c4ae7e',
         // Shadows for iOS
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.95,
        shadowRadius: 0.2,
        // Elevation for Android
        elevation: 2,
    }
});

export default TarotCardSelectionModal;