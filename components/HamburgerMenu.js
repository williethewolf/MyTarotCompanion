import React from 'react';
import { View } from 'react-native';

const HamburgerMenu = () => {
  return (
    <View style={styles.hamburgerLines}>
      <View style={styles.lineTop}></View>
      <View style={styles.lineMid}></View>
      <View style={styles.lineBot}></View>
    </View>
  );
};

const styles = {
  hamburgerLines: {
    alignItems: 'center',
  },
  lineTop: {
    height: 3, // Adjust as needed
    width: 5,
    backgroundColor: '#dba597', // Adjust as needed
    marginVertical: 1, // Adjust as needed
    borderRadius: 2
    // Add other styles as needed
  },
  lineMid: {
    height: 3, // Adjust as needed
    width: 12,
    backgroundColor: '#dba597', // Adjust as needed
    marginVertical: 1, // Adjust as needed
    borderRadius: 4
    // Add other styles as needed
  },
  lineBot: {
    height: 3, // Adjust as needed
    width: 20,
    backgroundColor: '#dba597', // Adjust as needed
    marginVertical: 1.5, // Adjust as needed
    borderRadius: 4
    // Add other styles as needed
  },
};

export default HamburgerMenu;