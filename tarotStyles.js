import { StyleSheet } from 'react-native';
import metrics from './utils/Metrics';
//UPDATE IF UPDATED IN APP.JS!!!!
const CARD_SLOT_SIZE = 100;

//Responsive calculations

const scaleSize = (size) => (metrics.screenWidth / 375) * size;

const isTablet = metrics.screenWidth >= 768;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF0',
        alignItems: 'center',
        //justifyContent: 'space-around',
        padding: scaleSize(10),
        position: 'relative'
      },
    //card styles
    card: {
        // Style for the card that will be dragged
        width: isTablet ? '70%' : '60%', // Set a fixed width or base it on the screen size
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
        zIndex:10000,
      },
      draggableCard: {
        width: '86%', // Set a fixed width or base it on the screen size
        maxWidth: scaleSize(300),
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
        marginLeft: scaleSize(9),
        marginTop: isTablet ? scaleSize(50) : scaleSize(-5),
        //marginTop: 2, 
      },
      topDeckCard: {
        width: '85%',
        maxWidth: scaleSize(300),
        aspectRatio : 1 /1.87,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleSize(5),
        borderWidth: scaleSize(1),
        borderColor: 'black',
        bottom: isTablet? -120 : scaleSize(4)
      },
      cardPlaceholder: {
        width: '100%',
        aspectRatio : 1 /1.87,
      },
      dropZone: {
        width: '30%',
        aspectRatio : 1 /1.7,
        margin: scaleSize(10),
        borderColor: '#2c3252',
        borderWidth: 0.5,
        //opacity: 0.5,
        borderStyle: 'dotted',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(173, 216, 230, 0.5)',
      },

      cardBackImage: {
        // Style for the image inside the draggable card
        width: '100%',
        aspectRatio : 1 /1.87,
        resizeMode: 'contain', // To keep the image aspect ratio
      },     
      cardImage: {
        // Style for the image inside the draggable card
        width: '90%',
        aspectRatio : 1 /1.87,
        resizeMode: 'contain', // To keep the image aspect ratio
        
      },
      cardImageContainer:{
        borderRadius: scaleSize(5),
        //margin:10,
        backgroundColor:'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

      },     
      threeTarotSpreadContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
      },
    cardContainer: {
        width: '25%',
        aspectRatio : 1 /1.87, // Height based on the aspect ratio of a tarot card
        maxWidth: scaleSize(100),
        borderRadius: scaleSize(5),
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
      width: scaleSize(100), // Width of the button
        aspectRatio : 1 /1.87, // Height based on the aspect ratio of a tarot card
        backgroundColor: '#E0E0E0', // A neutral color, change as needed
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleSize(5),
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
        fontSize: scaleSize(16), // Adjust as needed
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
      fontSize: scaleSize(12),
      flex: 1, 
      flexWrap: 'wrap',
      borderWidth: 2,
      flexShrink: 1,
      // Adjust positioning as needed
    },
    dealingDeck: {
      //justifyContent: 'center',
      width:'45%',
      alignItems: 'center',
      maxWidth: scaleSize(300),
      //bottom:-33,
    },
    deckControls: {
      width: '85%',
      height: scaleSize(55),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute', 
      // borderWidth:0.5,
      // borderColor: '#c4ae7e',
      // //paddingHorizontal: 100,
      left: '4%', 
      right: '4%',
      bottom: 0,
      // //maxWidth: '90%', // Adjust as needed
      // alignSelf: 'center',
    },

    pillButton: {
      
      backgroundColor: '#f5e5ba', // Button color
      paddingHorizontal: scaleSize(35),
      paddingVertical: scaleSize(10),
      borderRadius: scaleSize(30),
      borderWidth: 2, // Border width
      borderColor: '#c4ae7e', // Border color
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
    },

    pillButtonText: {
      color: '#142637', // Text color
      fontSize: scaleSize(13), // Text font size
      fontWeight: 'bold', // Text weight
    },

    threeTarotSpreadLables: {
      flexDirection: 'row',
        justifyContent: 'center',
      //flex:3,
      //justifyContent: 'space-between',
      //alignItems: 'center',
      width:'87%',
      gap:scaleSize(25)
    },

    threeTarotSpreadLable: {
      width: '30%',
      //flexDirection: 'row',
      borderColor: '#c4ae7e',
      borderWidth: 1,
      marginTop: scaleSize(10),
      textAlign:"center",
      fontSize: scaleSize(10),
      //justifyContent: 'space-between',
      //paddingHorizontal: 20,
      //alignItems: 'center',
    },

    cardMeaningsContainer: {
      width: '92%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: scaleSize(25),
      //marginHorizontal:5,
    },

    cardMeaningsCard:{
      flex:1,
      //overflow: 'scroll',
      

    },

    cardMeaningText:{
      backgroundColor: '#f5e5ba', // Button color
      paddingHorizontal: scaleSize(6),
      paddingVertical: scaleSize(2),
      borderRadius: scaleSize(6),
      //borderWidth: 2, // Border width
      //borderColor: '#c4ae7e', // Border color
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      color: '#006994',
      //borderWidth: 1,
      fontSize: scaleSize(10),
      marginTop: scaleSize(5),
      //textAlign:"center",
      overflow: 'visible',
      //overflow: 'scroll'
    },
    cardLabel:{
      width: '125%',
      overflow: 'visible',
      position: "absolute",
      bottom: -scaleSize(18),
      alignItems: 'center',
      fontSize: scaleSize(16),
    },
    cardLabelText: {
      fontSize: scaleSize(10),
  },
    cardSelectionArea:{
      //width:10
    },

    typeModalContainer: {
      zIndex: 2, // Lower zIndex since this modal appears beneath the card selection modal
    },
    cardModalContainer: {
      zIndex: 1, // Higher zIndex to ensure this modal appears above the type selection modal
    },
    
  });

  export default styles;