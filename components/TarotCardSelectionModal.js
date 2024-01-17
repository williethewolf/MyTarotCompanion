import React, {useState, useEffect } from 'react';
import { Modal, View, TouchableOpacity, ScrollView, Text, Image, Animated, StyleSheet } from 'react-native';

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

const TarotCardTypeSelectionModal = ({ isVisible, onClose, tarotCards, onCardSelected }) => {

    const [selectedType, setSelectedType] = useState(null);

    const handleTypeSelect = (type) => {
        setSelectedType(type);
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
                <TouchableOpacity
                    key={type}
                    onPress={() => handleTypeSelect(type)}
                >
                <Animated.View style={[styles.roundButton, getButtonStyle(type)]}>
                    <Image source={typeToImageMap[type]} style={styles.buttonImage} />
                </Animated.View>
                </TouchableOpacity>
              ))}
            </View>
      
            {/* Row for close button */}
            <View style={styles.closeButtonRow}>
              <TouchableOpacity style={styles.closeButton} onPress={() => {onClose(); setSelectedType(null);}}>
                <Text style={{color:'white'}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
      );

      const renderCardSelection = () => {
        const cards = tarotCards.filter(card => card.type === selectedType);
        return (
          <ScrollView horizontal style={styles.cardSelectionContainer}>
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
                  <Text style={{ fontSize: 12, textAlign: 'center' }}>{card.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
      };

      return (
        <Modal transparent visible={isVisible}>
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
        bottom: 75,
        left: 0,
        right: 0,
    },
    typeSelectionContainer:{
        flexDirection: 'column', // Stack rows vertically
        alignItems: 'center', // Center the rows
        justifyContent: 'space-around', // or 'space-between'
        padding: 10, // Adjust as needed
    },
    roundButton: {
        width: 70, // Increase size for better visibility and touch
        height: 70,
        borderRadius: 45, // Half of width/height to make it round
        margin: 5, // Space between buttons
        overflow: 'hidden', // To make sure the image respects the border radius
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
        borderWidth:2,
        borderColor: '#c4ae7e',
    },
    activeRoundButton: {
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#c4ae7e',
        transform: [{ translateY: -10 }],
    },
    buttonImage: {
        width: '100%', // Image takes the full space of the button
        height: '100%', // Maintain aspect ratio
        borderRadius: 25 // Make image round
    },
    buttonRow: {
        flexDirection: 'row', // Align type buttons horizontally
        justifyContent: 'space-around', // Space out the buttons evenly
    },
    closeButtonRow: {
        flexDirection: 'row', // Even though it's just one button, this keeps it consistent
        justifyContent: 'center', // Center the close button horizontally
    },
    cardSelectionContainer: {
        flex:1,
        flexDirection: 'row',
        paddingVertical: 10,
      },
      cardTouchable: {
        flex:1,
        aspectRatio : 1 /1.87,
        width:80,
        marginHorizontal: 5,
      },
      cardImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
      },
      modalContent: {
        flex: 1,
        justifyContent: 'flex-end', // Align content to the bottom
        alignItems: 'center',       // Center content horizontally
    },
    closeButton: {
        width: 70, // Increase size for better visibility and touch
        height: 70,
        borderRadius: 45, // Half of width/height to make it round
        margin: 5, // Space between buttons
        overflow: 'hidden', // To make sure the image respects the border radius
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
        borderWidth:2,
        borderColor: '#c4ae7e',
        backgroundColor: '#c4ae7e',
    }
});

export default TarotCardTypeSelectionModal;