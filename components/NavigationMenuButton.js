import React, { useRef, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { PieMenuContext } from '../Context'
import PieSlice from './PieSlice'; // Import the PieSlice component
import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const NavigationMenuButton = () => {
    const buttonRef = useRef(null);
    const { showPieMenu, setButtonPosition, hidePieMenuAfterAnimation } = useContext(PieMenuContext);

    
    const handlePress = () => {
        // Check if the ref is attached to the button
        if (buttonRef.current) {
          // Measure the position and size of the button
          buttonRef.current.measure((fx, fy, width, height, px, py) => {
            //console.log('Measured position:', { fx, fy, width, height, px, py });
            const pieMenuDiameter = scaleSize(300)

            const pieMenuX = px + width / 2 - pieMenuDiameter / (isTablet ? scaleSize(1.05) : scaleSize(7.5));
            const pieMenuY = py + height / 2 - pieMenuDiameter / (isTablet ? scaleSize(0.91) : scaleSize(3.5));
      
            // Set the position of the button for the pie menu
            setButtonPosition({ x: scaleSize(px), y: scaleSize(py), width, height });
      
            // Define the slices and actions for the pie menu
            const slices = [
              { color: '#161a29', size:28, rotation: 350, name:'Home', },
              { color: '#121521', size:28, rotation: 18, name:'Tarot',  },
              { color: '#161a29', size:28, rotation: 46,name:'Astrology',},
              { color: '#121521', size:28, rotation: 74, name:'Stones', },
              { color: '#161a29', size:31, rotation: 102, name:'FILLER', },
              { color: '#121521', size:31, rotation: 133, name:'FILLER', },
              { color: '#161a29', size:31, rotation: 164, name:'FILLER', },
              { color: '#121521', size:31, rotation: 195, name:'FILLER', },
              { color: '#161a29', size:31, rotation: 226, name:'FILLER', },
              { color: '#121521', size:31, rotation: 257, name:'FILLER', },
              { color: '#161a29', size:31, rotation: 288, name:'FILLER', },
              { color: '#121521', size:31, rotation: 319, name:'FILLER', },
            ];
      
            // Define the pie menu content
            const pieMenuContent = (
              <View style={[styles.pieMenu,  { top: pieMenuY, left: pieMenuX, width: pieMenuDiameter, height: pieMenuDiameter }]}>
                {slices.map((slice, index) => (
                  <PieSlice
                    key={index}
                    size= {slice.size}
                    name={slice.name}
                    backgroundColor={slice.color}
                    rotation={slice.rotation}
                    onPress={slice.action}
                    style={styles.pieSlice}
                  />
                ))}
              </View>
            );
      
            // Show the pie menu with the defined content
            showPieMenu(pieMenuContent, hidePieMenuAfterAnimation);
          });
        } else {
          console.log('Ref not attached to button');
        }
      };
      

    return (
        <TouchableOpacity ref={buttonRef} onPress={handlePress} style={styles.roundButton}>
  <Text style={styles.rightMenuButton}>⚿</Text>
</TouchableOpacity>
    );
};

export default NavigationMenuButton;
  
  const styles = StyleSheet.create({
    roundButton: {
      width: scaleSize(30),
      height: scaleSize(30),
      borderWidth: 2,
      borderColor: '#142637',
      borderRadius: scaleSize(15),
      backgroundColor: '#161a29',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000, // Ensure the button is above the pie menu
    },
    rightMenuButton: {
      color: 'white',
      fontSize: scaleSize(24),
      lineHeight: isTablet ? scaleSize(30) : scaleSize(28.5),
      zIndex: 1000
    },
    pieMenu: {
      position: 'absolute',
      borderRadius: scaleSize(75), // Half of pieMenuDiameter
      overflow: 'hidden',

      // position: 'absolute',
      // width: 200, // Define the size of the pie menu
      // height: 200, // Define the size of the pie menu
      // top: '50%',
      // left: '50%',
      // transform: [{ translateX: -100 }, { translateY: -100 }], // Adjust these values to align the center of the pie menu with the button
      // borderRadius: 100, // Make it circular
      // overflow: 'hidden', // Hide overflow
      zIndex: 801,
    
    },
    pieSlice: {
      zIndex: 801,
      borderWidth: scaleSize(30),
      borderColor: '#c4ae7e',
      borderRadius: scaleSize(50),
      
      // Styles for each pie slice
    },
  });