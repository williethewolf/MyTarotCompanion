import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
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
      
      <TouchableOpacity style={styles.menuButton}>
        {/* Pyramid-like Hamburger Menu */}
        <HamburgerMenu/>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff5eb',
    borderTopWidth:0.5,
    borderColor: '#c4ae7e',
    // Add any additional styling if needed
  },
  menuButton: {
    // Styling for the pyramid-like menu button
  },

  rightArrow:{
    color: '#c4ae7e',
    fontSize:34,
    lineHeight:30,
    position: 'relative',
    left: 26
  },
  leftArrow:{
    color: '#c4ae7e',
    fontSize:34,
    lineHeight:30,
    position: 'relative',
    left: -26
  },
  titleContainer: {
    // Styling for the title container with filigree
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    borderColor: '#c4ae7e',
        borderWidth: 1,
        borderTopWidth: 0,
        //borderStyle: 'dashed',
    paddingHorizontal: 5,
  },
  titleText: {
    fontSize: 20,
    color: '#1f2436'
    // Other styling for the title
  },
  rightMenuButton:{
    color: 'white',
    fontSize: 24,
    lineHeight:28.5,
  },
  roundButton: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#1f2436',
    borderRadius: 15,
    backgroundColor: '#161a29', // Adjust the color
    alignItems: 'center',
    justifyContent: 'center',
    
    // Add any other styling for the round button
  }
});

export default Header;