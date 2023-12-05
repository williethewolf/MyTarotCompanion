import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'
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
        <Text>Shuffle Deck</Text>
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

