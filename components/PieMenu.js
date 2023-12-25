//CURRENTLTY NOT IN USE
//CURRENTLTY NOT IN USE
//CURRENTLTY NOT IN USE
//CURRENTLTY NOT IN USE
//CURRENTLTY NOT IN USE
//CURRENTLTY NOT IN USE



import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PieSlice from './PieSlice';

const PieMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define the slices with rotation, color, and action
  // const slices = [
  //   { color: '#f12711', rotation: 0, action: () => console.log('Slice 1') },
  //   { color: '#444', rotation: 90, action: () => console.log('Slice 2') },
  //   { color: '#b7e13f', rotation: 180, action: () => console.log('Slice 3') },
  //   { color: 'blue', rotation: 270, action: () => console.log('Slice 4') },
  // ];

  return (
    <View style={styles.container}>
      {menuOpen && slices.map((slice, index) => (
        <PieSlice
          key={index}
          backgroundColor={slice.color}
          rotation={slice.rotation}
          onPress={slice.action}
        />
      ))}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
      <Text style={styles.rightMenuButton}>⚿</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    width: 30,
      height: 30,
      borderWidth: 2,
      borderColor: '#142637',
      borderRadius: 15,
      backgroundColor: '#161a29',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
  },
  rightMenuButton: {
    color: 'white',
    fontSize: 24,
    lineHeight: 28.5,
  },
});

export default PieMenu;