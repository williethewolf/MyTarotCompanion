import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet, View, Animated } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { PieMenuContext } from '../Context';
import metrics from '../utils/Metrics';

const scaleSize = (size) => (metrics.screenWidth / 375) * size;

const isTablet = metrics.screenWidth >= 768;

const PieSlice = ({ onPress, backgroundColor, rotation, icon, name, size }) => {
  const [isPressed, setIsPressed] = useState(false);

  const { pieMenu, hidePieMenuAfterAnimation  } = useContext(PieMenuContext);
  const opacity = new Animated.Value(0); // Opacity starts at 0

  // Path for the slice
  const startAngle = 0; // Starting angle in degrees
const endAngle = size; // Ending angle in degrees
const radius = scaleSize (150); // Larger radius for tablets
const svgSize = radius * 2;

// Adjust start and end coordinates for the slice path
const sliceCenterX = radius; // Center X of the slice (and SVG)
const sliceCenterY = radius; // Center Y of the slice (and SVG)

const startX = sliceCenterX + radius * Math.cos(Math.PI * startAngle / 180);
const startY = sliceCenterY + radius * Math.sin(Math.PI * startAngle / 180);
const endX = sliceCenterX + radius * Math.cos(Math.PI * (startAngle + endAngle) / 180);
const endY = sliceCenterY + radius * Math.sin(Math.PI * (startAngle + endAngle) / 180);

const slicePath = `M${sliceCenterX},${sliceCenterY} L${startX},${startY} A${radius},${radius} 0 0,1 ${endX},${endY} Z`;

// Text position (near the middle of the slice)
const textAngle = startAngle + (endAngle - startAngle) / 2;
const textX = radius / 2 * Math.cos(Math.PI * textAngle / 180) + sliceCenterX+5;
const textY = radius / 2 * Math.sin(Math.PI * textAngle / 180) + sliceCenterY-3;

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


//Decorative stuff
const circleAccent = {
    position: 'absolute',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#c4ae7e',
    borderRadius: 60/2,
    backgroundColor: '#e8d2c1',
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999, // Ensure the button is above the pie menu
};

//LOOKIE HERE!!!!!!
//ADD A POINTER EVENT NONE TO THE SLICES WITHOUT PATH TO PREVENT OVERLAPPINGS
const pointerEventsValue = name === "FILLER" ? "none" : "box-none";
const isNotFiller = name !== "FILLER";
return (
  
    <Svg pointerEvents={pointerEventsValue} height={svgSize} width={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} style={{ position: 'absolute', transform: [{ rotate: `${rotation}deg` }], zIndex:1 }}>
      <Circle r={scaleSize(3)} cx={scaleSize(35)} cy={scaleSize(35)} fill="#c4ae7e" />
      {isNotFiller ? (
        <Link href={urlTo()} asChild>
          <Path
            d={slicePath} 
            fill={fillColor}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
            style={{ borderWidth: 1, borderColor: '#c4ae7e', borderRadius: 50 }}
          />
        </Link>
      ):( <Path
        d={slicePath} 
        fill={fillColor}
        style={{ borderWidth: 1, borderColor: '#c4ae7e', borderRadius: 50 }}
      />)}
      {isNotFiller ? (
        <Link href={urlTo()} onPressOut={handlePressOut} style={[styles.text, { left: textX, top: textY, transform: [{ rotate: `${textRotationAngle}deg` }] }]}>
          {name}
        </Link>
      ) : (
        <Text>
        </Text>
      )}{/* <Text pointerEvents='none' style={[styles.text, { left: textX, top: textY,  transform: [{ rotate: `${textRotationAngle}deg` }], }]}>
      {name}
    </Text> */}
    {/* decorative circles but I dont love them */}
    {/* <View pointerEvents="none" style={[circleAccent, {left:textX+19 ,top: textY+75}] }/> */}
   
    </Svg>
);
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    color: 'white', // Adjust text color as needed
    textAlign: 'center',
    fontSize: scaleSize(11)
    // Add other styles for tex
  //  borderWidth: 1,
  //   borderColor: '#c4ae7e',
  //   borderRadius: 4,
  },
});

export default PieSlice;