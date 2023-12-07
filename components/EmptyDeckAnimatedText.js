import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

const EmptyDeckAnimatedText = ({ isVisible }) => {
  const [fadeAnim] = useState(new Animated.Value(0));  // Initial opacity
  const [scaleAnim] = useState(new Animated.Value(0.5));  // Initial scale

  useEffect(() => {
    if (isVisible) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }, [isVisible, fadeAnim, scaleAnim]);

  return (
    <Animated.Text
      style={{
        opacity: fadeAnim,
    transform: [{ scale: scaleAnim }],
    fontSize: 20, // Example font size, adjust as needed
    margin: 0,
    padding: 0,
      }}
    >
      No more cards to draw!
    </Animated.Text>
  );
};
export default EmptyDeckAnimatedText;