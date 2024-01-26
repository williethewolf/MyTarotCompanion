import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, Animated  } from 'react-native';
import { PieMenuContext } from '../Context';
import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const PieMenuOverlay = () => {
  const { pieMenu, buttonPosition, hidePieMenuAfterAnimation  } = useContext(PieMenuContext);

  const opacity = useRef(new Animated.Value(0)).current; // Opacity starts at 0
const scale = useRef(new Animated.Value(0)).current; // Scale starts at 0
  

useEffect(() => {
  if (pieMenu.visible) {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 70,
        bounciness: 12,
      }),
    ]).start();
  }
}, [pieMenu.visible, opacity, scale]);

useEffect(() => {
  if (!pieMenu.visible) {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 0,
        useNativeDriver: true,
        speed: 14,
        bounciness: 30,
      }),
    ]).start(() => {
      hidePieMenuAfterAnimation();
    });
  }
}, [pieMenu.visible, opacity, scale]);

const animatedStyle = {
  opacity: opacity,
  transform: [{ scale: scale }],
};

  if (!pieMenu.visible) return null;

  const menuStyle = {
    position: 'absolute',
    width: scaleSize(300),
    height: scaleSize(300),
    left: buttonPosition.x + (buttonPosition.width / 2) - 150,
    top: buttonPosition.y + (buttonPosition.height / 2) - 200,
    zIndex:1,
    // Add other styles as needed...
  };

  const roundButton= {
    position: 'absolute',
    width: scaleSize(31),
    height: scaleSize(31),
    borderWidth: scaleSize(1),
    borderColor: '#c4ae7e',
    borderRadius: scaleSize(50),
    backgroundColor: '#161a29',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Ensure the button is above the pie menu
    left: buttonPosition.x * (isTablet? 0.4 : 0.94 ),
    top: buttonPosition.y- buttonPosition.height* (isTablet? 1.2 : 1.7 ),
    
  };
  const roundInnerAccent= {
    position: 'absolute',
    width: scaleSize(60),
    height: scaleSize(60),
    borderWidth: 1,
    borderColor: '#c4ae7e',
    borderRadius: scaleSize(60)/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 800, // Ensure the button is above the pie menu
    left: buttonPosition.x*(isTablet? -0.5: 0.04) ,
    top: buttonPosition.y- buttonPosition.height* (isTablet? 1.7 :2.165),
    
  };
  const roundOuterAccent= {
    position: 'absolute',
    width: scaleSize(295),
    height: scaleSize(295),
    borderWidth: scaleSize(3),
    borderColor: '#c4ae7e',
    borderRadius: scaleSize(295)/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 800, // Ensure the button is above the pie menu
    left: buttonPosition.x*(isTablet? -7.7:-7.2),
    top: buttonPosition.y- buttonPosition.height * (isTablet? 5.5 :6),
    
  };
  const roundMiddleAccent= {
    position: 'absolute',
    width: scaleSize(120),
    height: scaleSize(120),
    borderWidth: 1,
    borderColor: '#c4ae7e',
    borderRadius: scaleSize(120)/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 800, // Ensure the button is above the pie menu
    left: buttonPosition.x*(isTablet? -2.2 : -1.65 ),
    top: buttonPosition.y- buttonPosition.height* (isTablet? 2.6 : 3 ),
    
  };

  const handleButtonPress = () => {
    // Start the fade-out animation
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Hide the menu after the fade-out animation
      hidePieMenuAfterAnimation();
    });
  };

  return (
    <Modal visible={pieMenu.visible} transparent>
      <View style={styles.overlay}>
      <Animated.View style={[menuStyle, animatedStyle]}>
        {pieMenu.content}
      </Animated.View>
        <TouchableOpacity style={roundButton} onPress={handleButtonPress}>
  <Text style={styles.rightMenuButton}>⚿</Text>
</TouchableOpacity>
    <View pointerEvents="none" style={roundInnerAccent}/>
    <View pointerEvents="none" style={roundMiddleAccent}/>
    <View pointerEvents="none" style={roundOuterAccent}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Other styling...
  },
  
  rightMenuButton: {
    color: 'white',
    fontSize: scaleSize(23),
    lineHeight: scaleSize(30),
    zIndex: 1000,
  
  }
  // Add other styles if needed
});

export default PieMenuOverlay;