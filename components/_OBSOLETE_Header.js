//
//
//
//
//NOT IN USE ANYMORE SINCE IMPLEMENTING EXPO ROUTER


import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import HamburgerMenuButton from './HamburgerMenuButton';
import HamburgerDrawer from './HamburgerDrawer';

import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleHamburgerButton = () =>{
    console.log('Current state before toggle:', isDrawerOpen); // Debugging line
    setDrawerOpen(!isDrawerOpen);
  }

  return (
  <>
    <HamburgerDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    <View style={styles.headerContainer}>

      <TouchableOpacity style={styles.roundButton}>
        <Text style={styles.rightMenuButton}>⚿</Text>
            {/* Round Button/Icon */}
      </TouchableOpacity>
          
      <View style={styles.titleContainer}>
        {/* TAROT Title with Filigree */}
        <Text style={styles.leftArrow}>↠</Text>
        <Text style={styles.titleText}>TAROT</Text>
        <Text style={styles.rightArrow}>↞</Text>
      </View>
      
      <TouchableOpacity style={styles.menuButton} onPress={handleHamburgerButton()}>
        {/* Pyramid-like Hamburger Menu */}
        <HamburgerMenuButton/>
      </TouchableOpacity>

    </View>
  </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSize(10),
    backgroundColor: '#FFFCF0',
    borderTopWidth:scaleSize(0.5),
    borderBottomWidth:scaleSize(0.2),
    borderColor: '#c4ae7e',
    // Add any additional styling if needed
  },
  menuButton: {
    // Styling for the pyramid-like menu button
  },

  rightArrow:{
    color: '#c4ae7e',
    fontSize:scaleSize(34),
    lineHeight:scaleSize(30),
    position: 'relative',
    left: scaleSize(26)
  },
  leftArrow:{
    color: '#c4ae7e',
    fontSize:scaleSize(34),
    lineHeight:scaleSize(30),
    position: 'relative',
    left: scaleSize(-26)
  },
  titleContainer: {
    // Styling for the title container with filigree
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    borderColor: '#c4ae7e',
        borderWidth: scaleSize(1),
        borderTopWidth: 0,
        //borderStyle: 'dashed',
    paddingHorizontal: scaleSize(5),
  },
  titleText: {
    fontSize: scaleSize(20),
    color: '#1f2436'
    // Other styling for the title
  },
  rightMenuButton:{
    color: 'white',
    fontSize: scaleSize(24),
    lineHeight:scaleSize(28.5),
  },
  roundButton: {
    width: scaleSize(30),
    height: scaleSize(30),
    borderWidth: scaleSize(2),
    borderColor: '#142637',
    borderRadius: scaleSize(15),
    backgroundColor: '#161a29', // Adjust the color
    alignItems: 'center',
    justifyContent: 'center',
    
    // Add any other styling for the round button
  }
});

export default Header;