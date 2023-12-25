// PieMenuOverlay.js
import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, Animated  } from 'react-native';
import { PieMenuContext } from '../Context';

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
    width: 300,
    height: 300,
    left: buttonPosition.x + (buttonPosition.width / 2) - 150,
    top: buttonPosition.y + (buttonPosition.height / 2) - 200,
    zIndex:1,
    // Add other styles as needed...
  };

  const roundButton= {
    position: 'absolute',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#c4ae7e',
    borderRadius: 50,
    backgroundColor: '#161a29',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Ensure the button is above the pie menu
    left: buttonPosition.x,
    top: buttonPosition.y- buttonPosition.height*1.65,
    
  };
  const roundInnerAccent= {
    position: 'absolute',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#c4ae7e',
    borderRadius: 60/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 800, // Ensure the button is above the pie menu
    left: buttonPosition.x*0.08,
    top: buttonPosition.y- buttonPosition.height*2.12,
    
  };
  const roundOuterAccent= {
    position: 'absolute',
    width: 295,
    height: 295,
    borderWidth: 3,
    borderColor: '#c4ae7e',
    borderRadius: 295/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 800, // Ensure the button is above the pie menu
    left: buttonPosition.x*-7.,
    top: buttonPosition.y- buttonPosition.height*5.9,
    
  };
  const roundMiddleAccent= {
    position: 'absolute',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#c4ae7e',
    borderRadius: 120/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 800, // Ensure the button is above the pie menu
    left: buttonPosition.x*-1.65,
    top: buttonPosition.y- buttonPosition.height*3,
    
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
    fontSize: 24,
    lineHeight: 28.5,
    zIndex: 1000,
  
  }
  // Add other styles if needed
});

export default PieMenuOverlay;