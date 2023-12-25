import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet, View, Animated } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { PieMenuContext } from '../Context';

const PieSlice = ({ onPress, backgroundColor, rotation, icon, name, size }) => {
  const [isPressed, setIsPressed] = useState(false);

  const { pieMenu, hidePieMenuAfterAnimation  } = useContext(PieMenuContext);
  const opacity = new Animated.Value(0); // Opacity starts at 0

  // Path for the slice
  const startAngle = 0; // Starting angle in degrees
const endAngle = size; // Ending angle in degrees
const radius = 150; // Radius of the circle

const startX = radius + radius * Math.cos(Math.PI * startAngle / 180);
const startY = radius + radius * Math.sin(Math.PI * startAngle / 180);
const endX = radius + radius * Math.cos(Math.PI * (startAngle + endAngle) / 180);
const endY = radius + radius * Math.sin(Math.PI * (startAngle + endAngle) / 180);

const slicePath = `M150,150 L${startX},${startY} A150,150 0 0,1 ${endX},${endY} Z`;

// Text position (near the middle of the slice)
const textAngle = startAngle + (endAngle - startAngle) / 2;
const textX = radius / 2 * Math.cos(Math.PI * textAngle / 180) + 155;
const textY = radius / 2 * Math.sin(Math.PI * textAngle / 180) + 148;

 // Calculate the rotation angle for the text
 const textRotationAngle = size / 2;

 const handlePressIn = () => {
  setIsPressed(true);
};

const handlePressOut = () => {
  setIsPressed(false);
  Animated.timing(opacity, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start(() => {
    // Hide the menu after the fade-out animation
    hidePieMenuAfterAnimation();
  });
};

const fillColor = isPressed ? 'rgba(255,255,255,0.5)' : backgroundColor; // Change to a lighter color on press


const handlePress = (evt) => {
  // Get touch point relative to the center of the pie
  const touchX = evt.nativeEvent.locationX - 150; // Adjust as per your SVG size
  const touchY = evt.nativeEvent.locationY - 150;

  // Calculate angle of the touch point
  const touchAngle = Math.atan2(touchY, touchX) * (180 / Math.PI);

  // Check if the touch is within the slice's angle range
  if (touchAngle >= rotation && touchAngle <= rotation + size) {
    onPress();
  }
};

const urlTo = () => {
if (name == 'Home'){
 return ('')
}
else
return 'home/'+name;
}
//closing after navigation

useEffect(() => {
  if (pieMenu.visible) {
    Animated.timing(opacity, {
      toValue: 1, // Fade to fully visible
      duration: 800, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  } else {
    Animated.timing(opacity, {
      toValue: 0, // Fade to fully visible
      duration: 800, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      // Hide the menu after the fade-out animation
      hidePieMenuAfterAnimation();
    });
  }
}, [pieMenu.visible, opacity, hidePieMenuAfterAnimation]);

if (!pieMenu.visible) return null;


return (
  
    <Svg pointerEvents='box-none' height="300" width="300" viewBox="0 0 300 300" style={{ position: 'absolute', transform: [{ rotate: `${rotation}deg` }], zIndex:1 }}>
      <Circle r="3" cx="35" cy="35" fill="#c4ae7e" />
      <Link href={urlTo()} asChild>
      <Path
      d={slicePath} 
      fill={fillColor}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      style ={{  borderWidth: 1,
        borderColor: '#c4ae7e',
        borderRadius: 50,}}
      />
     </Link>
     <Link href={urlTo()}  onPressOut={handlePressOut} style={[styles.text, { left: textX, top: textY,  transform: [{ rotate: `${textRotationAngle}deg` }], }]}>{name}</Link>
    {/* <Text pointerEvents='none' style={[styles.text, { left: textX, top: textY,  transform: [{ rotate: `${textRotationAngle}deg` }], }]}>
      {name}
    </Text> */}
   
    </Svg>
);
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    color: 'white', // Adjust text color as needed
    textAlign: 'center',
    // Add other styles for tex
  //  borderWidth: 1,
  //   borderColor: '#c4ae7e',
  //   borderRadius: 4,
  },
});

export default PieSlice;