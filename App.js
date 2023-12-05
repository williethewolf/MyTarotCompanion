import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import tarotCards from './tarotCards';

export default function App() {
  const [drawnCards, setDrawnCards] = useState([]);

  const shuffleDeck = () => {
    // Shuffle the tarotCards array
    for (let i = tarotCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tarotCards[i], tarotCards[j]] = [tarotCards[j], tarotCards[i]];
    }
  };

  const drawCard = (index) => {
    const card = tarotCards.shift();
    let newDrawnCards = [...drawnCards];
    newDrawnCards[index] = { ...card, reversed: Math.random() < 0.5 };
    setDrawnCards(newDrawnCards);
  };
  
  const resetDeck = () => {
    setDrawnCards([]);
    // Reinitialize the deck (you might need to import the original deck again)
    shuffleDeck();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shuffleDeck} style={styles.shuffleButton}>
      <LinearGradient
          colors={['#9E9E9E', '#E0E0E0']} // Adjust these colors as needed
          style={styles.shuffleButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.shuffleButtonText}>Shuffle</Text>
        </LinearGradient>
      </TouchableOpacity>
  
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

