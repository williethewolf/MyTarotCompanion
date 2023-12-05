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
        // other styles for the text
      }}
    >
      No more cards to draw!
    </Animated.Text>
  );
};
export default EmptyDeckAnimatedText;