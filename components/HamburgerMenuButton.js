import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const HamburgerMenuButton = ({ onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  const topWidth = useRef(new Animated.Value(scaleSize(5))).current; // Starting width for top line
  const bottomWidth = useRef(new Animated.Value(scaleSize(20))).current; // Starting width for bottom line
  const middleMargin = useRef(new Animated.Value(scaleSize(1))).current; // Starting margin for middle line
  const bottomMargin = useRef(new Animated.Value(scaleSize(1.5))).current; // Starting margin for middle line

  const animateWidths = () => {
    setIsPressed(!isPressed);

    Animated.parallel([
      Animated.timing(topWidth, {
        toValue: isPressed ? scaleSize(5) : scaleSize(20), // Toggle width
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(bottomWidth, {
        toValue: isPressed ? scaleSize(20) : scaleSize(5), // Toggle width
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(middleMargin, {
        toValue: isPressed ? scaleSize(1.2) : scaleSize(1.5), // Toggle margin
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(bottomMargin, {
        toValue: isPressed ? scaleSize(1) : scaleSize(1), // Toggle margin
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
    
    //The actual function of the button
    if (onPress) {
      onPress();
    }
  };


  return (
    <TouchableOpacity onPress={animateWidths} style={styles.container}>
      <View style={styles.hamburgerLines}>
        <Animated.View style={[styles.line, { width: topWidth, marginVertical: scaleSize(1) }]}></Animated.View>
        <Animated.View style={[styles.line, { width: scaleSize(12), marginVertical: middleMargin }]}></Animated.View>
        <Animated.View style={[styles.line, { width: bottomWidth, marginVertical: bottomMargin }]}></Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10, // Padding to increase the touchable area
  },
  hamburgerLines: {
    alignItems: 'center',
  },
  line: {
    height: scaleSize(3), 
    backgroundColor: '#dba597', 
    borderRadius: scaleSize(2),
  },
  // lineMid: {
  //   height: scaleSize(3), 
  //   width: scaleSize(12),
  //   backgroundColor: '#dba597', 
  //   marginVertical: scaleSize(1.5), 
  //   borderRadius: scaleSize(4)

  // },
  // lineBot: {
  //   height: scaleSize(3),
  //   width: scaleSize(20),
  //   backgroundColor: '#dba597', 
  //   marginVertical: scaleSize(1.5), 
  //   borderRadius:scaleSize(4)
  // },
});

export default HamburgerMenuButton;