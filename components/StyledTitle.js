import { Text, View, StyleSheet } from 'react-native'

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
      padding: 10,
      backgroundColor: '#FFFCF0',
      borderTopWidth:0.5,
      borderBottomWidth:0.2,
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
      borderColor: '#142637',
      borderRadius: 15,
      backgroundColor: '#161a29', // Adjust the color
      alignItems: 'center',
      justifyContent: 'center',
      
      // Add any other styling for the round button
    }
  });