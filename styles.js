import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    cardGrid: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        columnGap: 13,
      },
    cardContainer: {
        width: '25%',
        aspectRatio : 1 /1.727, // Height based on the aspect ratio of a tarot card
        maxWidth: 100,
        borderRadius: 5, // Optional, for slightly rounded corners
        // Additional styling to make it look more like a deck of cards
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: '#000',
        backgroundColor: 'red',
     },
       
    shuffleButton: {
        width: 100, // Width of the button
        aspectRatio : 1 /1.727, // Height based on the aspect ratio of a tarot card
        backgroundColor: '#E0E0E0', // A neutral color, change as needed
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, // Optional, for slightly rounded corners
        // Additional styling to make it look more like a deck of cards
        borderWidth: 2,
        borderColor: '#9E9E9E',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,  
        elevation: 3, // for Android
      },
    shuffleButtonText: {
        color: '#000', // Text color
        fontSize: 16, // Adjust as needed
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#ccc', // Greyed out
        borderColor: '#aaa',
      },
    resetButton: {
      // Styles for the reset button
    },
    cardText: {
      // Styles for the text inside each card container
      textAlign: 'center'
    },
    // ... other styles
  });

  export default styles;