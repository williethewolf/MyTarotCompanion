import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Animated, View, TouchableOpacity, Text, Image } from 'react-native';
import backofCards from "../assets/BackofDeck.svg";
import styles from '../styles';

const CardFlipAnimation = forwardRef(({ cardData, style, onFlipComplete }, ref) => {
  const flipAnim = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  useImperativeHandle(ref, () => ({
    triggerFlip() {
      if (!isFlipped) {
        Animated.spring(flipAnim, {
          toValue: 180,
          friction: 8,
          tension: 10,
          useNativeDriver: true,
        }).start(() => {
          onFlipComplete && onFlipComplete(true);
        });
        setIsFlipped(true);
      }
    },
  }));

  const interpolateFront = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const interpolateBack = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <View>
      <Animated.View style={[style, { transform: [{ rotateY: interpolateFront }] }]}>
        {/* Render the back of the card */}
        <Image source={backofCards} style={styles.cardImage} />
      </Animated.View>
      <Animated.View style={[style, { transform: [{ rotateY: interpolateBack }], position: 'absolute' }]}>
        {/* Render the front of the card */}
        <Text>{cardData.name}</Text>
      </Animated.View>
    </View>
  );
});

export default CardFlipAnimation;