import { StyleSheet } from 'react-native';
//UPDATE IF UPDATED IN APP.JS!!!!
const CARD_SLOT_SIZE = 100; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF0',
        alignItems: 'center',
        //justifyContent: 'space-around',
        padding:10
      },
    //card styles
    card: {
        // Style for the card that will be dragged
        width: '60%', // Set a fixed width or base it on the screen size
        aspectRatio : 1 /1.87, // Height based on the aspect ratio of a tarot card
        backgroundColor: '#fff', // Adjust as needed
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3, // For Android
        position: 'absolute', // Important for positioning the card freely
      },
      draggingCard: {
        // Additional styles to apply when the card is being dragged
        opacity: 0.8, // Slightly transparent while dragging
        transform: [{ scale: 1.1 }], // Optional: Slightly increase the size when dragging
        zIndex:10000
      },
      draggableCard: {
        width: '86%', // Set a fixed width or base it on the screen size
        aspectRatio : 1 /1.87, // Height based on the aspect ratio of a tarot card
        //backgroundColor: '#fff', // Adjust as needed
        //justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3, // For Android
        position: 'absolute', // Important for positioning the card freely
        //left: '50%',
        marginLeft: 15,
        //marginTop: 2, 
      },
      topDeckCard: {
        width: '85%',
        aspectRatio : 1 /1.87,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
      },
      cardPlaceholder: {
        width: '100%',
        aspectRatio : 1 /1.87,
      },
      dropZone: {
        width: 100,
        aspectRatio : 1 /1.87,
        margin: 10,
        borderColor: '#2c3252',
        borderWidth: 0.5,
        opacity: 0.5,
        borderStyle: 'dotted',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#DEE3DF',
      },

      cardBackImage: {
        // Style for the image inside the draggable card
        width: '100%',
        aspectRatio : 1 /1.87,
        resizeMode: 'contain', // To keep the image aspect ratio
      },     
      threeTarotSpreadContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //width: '100%',
      },
    cardContainer: {
        width: '25%',
        aspectRatio : 1 /1.87, // Height based on the aspect ratio of a tarot card
        maxWidth: 100,
        borderRadius: 5, // Optional, for slightly rounded corners
        // Additional styling to make it look more like a deck of cards
        shadowColor: '#000',
        //backgroundColor: 'red',
        borderStyle: 'dotted',
        borderWidth: 2,
        borderColor: '#9E9E9E',
        justifyContent: 'center',
        alignItems: 'center',
     },
       
    shuffleButton: {
        width: 100, // Width of the button
        aspectRatio : 1 /1.87, // Height based on the aspect ratio of a tarot card
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
    dropZoneLabel: {
      position: 'absolute',
      color: 'black',
      fontSize: 12,
      flex: 1, 
      flexWrap: 'wrap',
      borderWidth: 2,
      flexShrink: 1,
      // Adjust positioning as needed
    },
    dealingDeck: {
      //justifyContent: 'center',
      alignItems: 'center'
    },
    deckControls: {
      height: 85,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
      borderWidth:0.5,
      borderColor: '#c4ae7e',
      paddingHorizontal: 100,
      // right: 10, 
      bottom: 0,
      //maxWidth: '90%', // Adjust as needed
      alignSelf: 'center',
    },

    pillButton: {
      
      backgroundColor: '#f5e5ba', // Button color
      paddingHorizontal: 20, // Horizontal padding
      paddingVertical: 10, // Vertical padding
      borderRadius: 30, // Half of your button height to create a pill shape
      borderWidth: 2, // Border width
      borderColor: '#c4ae7e', // Border color
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
    },

    pillButtonText: {
      color: '#142637', // Text color
      fontSize: 16, // Text font size
      fontWeight: 'bold', // Text weight
    },

    threeTarotSpreadLables: {
      //flex:3,
      flexDirection: 'row',
      //justifyContent: 'space-between',
      //alignItems: 'center',
      gap:25
    },

    threeTarotSpreadLable: {
      width: 95,
      //flexDirection: 'row',
      borderColor: '#c4ae7e',
      borderWidth: 1,
      marginTop: 10,
      textAlign:"center",
      //justifyContent: 'space-between',
      //paddingHorizontal: 20,
      //alignItems: 'center',
    },

    cardMeaningsContainer: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap:25,
      //marginHorizontal:5,
    },

    cardMeaningsCard:{
      flex:1,
      //overflow: 'wrap',
      

    },

    cardMeaningText:{
      backgroundColor: '#f5e5ba', // Button color
      paddingHorizontal: 20, // Horizontal padding
      paddingVertical: 10, // Vertical padding
      borderRadius: 30, // Half of your button height to create a pill shape
      borderWidth: 2, // Border width
      borderColor: '#c4ae7e', // Border color
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      color: 'white',
      //borderWidth: 1,
      marginTop: 10,
      //textAlign:"center",
      overflow: 'visible',
    }
    
  });

  export default styles;