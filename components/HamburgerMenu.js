import React from 'react';
import { View } from 'react-native';

import metrics from '../utils/Metrics';

const scaleSize = (size) => (metrics.screenWidth / 375) * size;

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
    height: scaleSize(3), // Adjust as needed
    width: scaleSize(5),
    backgroundColor: '#dba597', // Adjust as needed
    marginVertical: scaleSize(1), // Adjust as needed
    borderRadius: scaleSize(2)
    // Add other styles as needed
  },
  lineMid: {
    height: scaleSize(3), // Adjust as needed
    width: scaleSize(12),
    backgroundColor: '#dba597', // Adjust as needed
    marginVertical: scaleSize(1), // Adjust as needed
    borderRadius: scaleSize(4)
    // Add other styles as needed
  },
  lineBot: {
    height: scaleSize(3), // Adjust as needed
    width: scaleSize(20),
    backgroundColor: '#dba597', // Adjust as needed
    marginVertical: scaleSize(1.5), // Adjust as needed
    borderRadius:scaleSize(4)
    // Add other styles as needed
  },
};

export default HamburgerMenu;