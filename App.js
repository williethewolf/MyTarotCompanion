import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import EmptyDeckAnimatedText from './emptyDeckAnimatedText';

import tarotCards from './tarotCards';

export default function App() {
  const [currentDeck, setCurrentDeck] = useState([...tarotCards]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [isDeckEmpty, setIsDeckEmpty] = useState(false);
  const [showEmptyDeckMessage, setShowEmptyDeckMessage] = useState(false);

  const shuffleDeck = (deck) => {
    if (!Array.isArray(deck)) {
      console.error('shuffleDeck was called without a valid deck array');
      return;
    }
  
    let shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    setCurrentDeck(shuffledDeck);
  };

  const drawCard = (index) => {
    if (currentDeck.length === 0) {
      setIsDeckEmpty(true);
      setShowEmptyDeckMessage(true);
      setTimeout(() => setShowEmptyDeckMessage(false), 1000); // Reset after 1 second
      return;
    }
    setIsDeckEmpty(false);
    const card = currentDeck.shift();
    let newDrawnCards = [...drawnCards];
    newDrawnCards[index] = { ...card, reversed: Math.random() < 0.5 };
    setDrawnCards(newDrawnCards);
    setCurrentDeck(currentDeck);
  };
  
  const resetDeck = () => {
    setDrawnCards([]);
    setIsDeckEmpty(false);
    shuffleDeck([...tarotCards]); // Pass a fresh copy of the original tarotCards array
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
         onPress={() => shuffleDeck([...currentDeck])}  
        style={[styles.shuffleButton, isDeckEmpty && styles.disabledButton]}
        disabled={isDeckEmpty}
      >
      <LinearGradient
          colors={['#9E9E9E', '#E0E0E0']} // Adjust these colors as needed
          style={styles.shuffleButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.shuffleButtonText}>Shuffle</Text>
        </LinearGradient>
      </TouchableOpacity>

      <EmptyDeckAnimatedText isVisible={showEmptyDeckMessage} />

      <View style={styles.cardGrid}>
        {[0, 1, 2].map((index) => (
          <TouchableOpacity key={index} onPress={() => drawCard(index)} style={styles.cardContainer}>
            <Text style={styles.cardText}>{drawnCards[index] ? `${drawnCards[index].name} ${drawnCards[index].reversed ? '(Upside down)' : ''}` : `Card ${index + 1}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
  
      <TouchableOpacity onPress={resetDeck} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
  
      <StatusBar style="auto" />
    </View>
  );
}

