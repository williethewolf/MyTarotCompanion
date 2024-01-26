import { Text, View, StyleSheet } from 'react-native'

import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const StyledTitle = ({ navigation  }) => {
    const title = (navigation?.getState()?.routes?.[navigation?.getState()?.index]?.name || 'Default Title').toUpperCase();

    return (
      <View style={styles.titleContainer}>
        <Text style={styles.leftArrow}>↠</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.rightArrow}>↞</Text>
      </View>
    );
  };
  
  export default StyledTitle;

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
      margin:scaleSize(8)
    },
    titleText: {
      fontSize: scaleSize(18),
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