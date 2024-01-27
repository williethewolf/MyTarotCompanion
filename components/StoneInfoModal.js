import React from 'react';
import { Image } from 'expo-image';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import CapitalizeFirst from '../utils/CapitalizeFirst';
import Markdown from 'react-native-markdown-display';
import { isTablet, scaleSize } from '../utils/ResponsiveSizes';

const StoneInfoModal = ({ item, visible, onClose }) => {
    if (!item) return null;

    const defaultImagePath = require('../assets/stones/images/missing.png');
    const imageSource = item.ImageURL ? { uri: item.ImageURL } : defaultImagePath;
    const isAffiliateLinkValid = item.AffiliateLink && isValidUrl(item.AffiliateLink);

    const handleOverlayPress = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    const renderProperties = () => {
        return item.Properties.map((property, index) => (
            <View key={index} style={styles.propertyPill}>
                <Text style={styles.propertyText}>{property}</Text>
            </View>
        ));
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            isVisible={visible}
            onRequestClose={onClose}
            style= {{margin:0}}
            backdropColor={"black"}
            backdropOpacity={0.30}
            backdrop={true}
            //coverScreen={true}
            propagateSwipe
            animationIn={'zoomInUp'}
            animationInTiming={800}
            animationOut={'zoomOutUp'}
            animationOutTiming={200}
        >
            <View style={styles.modalOverlay} onTouchEnd={onClose}>
                <View style={styles.modalContent} onTouchEnd={(e) => e.stopPropagation()}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={ {fontSize:20}}>X</Text> 
                    </TouchableOpacity>
                    {/* First View */}
                    <View style={styles.firstView}>
                        <Text style={styles.modalTitle}>{CapitalizeFirst(item.Name)}</Text>
                        <View style={styles.horizontalLine} />
                        <ScrollView horizontal style={styles.propertiesContainer} contentContainerStyle={styles.propertiesContentContainer}>
                          {renderProperties()}
                        </ScrollView>
                    </View>
                    {/* Second View */}
                    <Image source={imageSource} style={styles.modalImage} placeholder={defaultImagePath} transition={500} alt={item.Name}
                    accessibilityLabel={item.Name ? item.Name.toString() : 'Image'} 
                    // Ensure this is a string
                     />
                    {/* Third View */}
                    <View style={styles.thirdView}>
                        <View>
                        <ScrollView style={styles.descriptionScroll}>
                            <Markdown style={styles.markdownStyle}>{item.Description}</Markdown>
                        </ScrollView>
                        <View style={styles.fadeEffect} />
                        </View>
                        <TouchableOpacity 
                            style={[
                                styles.affiliateButton, 
                                { backgroundColor: isAffiliateLinkValid ? 'blue' : 'grey' }
                            ]}
                            onPress={() => isAffiliateLinkValid && Linking.openURL(item.AffiliateLink)}
                            disabled={!isAffiliateLinkValid}
                        >
                            <Text style={styles.affiliateButtonText}>Purchase Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      //backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background
      paddingTop:scaleSize(50),
    },
    modalContent: {
        width: '100%',
        height:'100%',
        backgroundColor: 'white',
        //borderRadius: 5,
        //padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalImage: {
      width: '100%',
      height: 400, // Adjust as needed
      borderRadius: 10,
    },
    modalTitle: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
        marginVertical:scaleSize(15)
    },
    descriptionScroll: {
      maxHeight: Dimensions.get('window').height / scaleSize(5), // Adjust as needed
    },
    descriptionText: {
      fontSize: scaleSize(16),
      color: 'black',
    },
    closeButton: {
      position: 'absolute',
      top: scaleSize(10),
      right: scaleSize(10),
      zIndex:11,
      // Add more styling for the close button
    },
    firstView: {
      width: '100%',
      borderBottomLeftRadius: scaleSize(20),
      borderBottomRightRadius: scaleSize(20),
      backgroundColor: 'white',
      paddingBottom: scaleSize(10),
      marginBottom: -scaleSize(20), // To overlap onto the next view
      alignItems: 'center',
      zIndex: 10
    },
    horizontalLine: {
        width: '80%',
        height: scaleSize(1),
        backgroundColor: 'grey',
        marginVertical: scaleSize(5),
    },
    propertiesContainer: {
      marginVertical:scaleSize(10),
      paddingHorizontal:scaleSize(20)
    },
    propertiesContentContainer: {
      // Styles that affect the layout of the ScrollView's children
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    propertyPill: {
        backgroundColor: '#f5e5ba',
        borderRadius: scaleSize(15),
        paddingVertical: scaleSize(5),
        paddingHorizontal: scaleSize(10),
        margin: scaleSize(3),
    },
    propertyText: {
        color: '#0e0f17',
        fontSize: scaleSize(10),
    },
    thirdView: {
        width: '100%',
        borderTopLeftRadius: scaleSize(20),
        borderTopRightRadius: scaleSize(20),
        backgroundColor: 'white',
        paddingTop: scaleSize(20),
        zIndex: 10,
        marginTop: -scaleSize(20),
        paddingHorizontal:scaleSize(40)
    },
    affiliateButton: {
      borderRadius: scaleSize(20),
      padding: scaleSize(10),
      alignItems: 'center',
      marginTop: scaleSize(20),
      marginBottom: scaleSize(10),
    },
    affiliateButtonText: {
        color: 'white',
        fontSize: scaleSize(16),
    },
    fadeEffect: {
      height: scaleSize(15),
      width: '100%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white', // Adjust color to match your background
      opacity: 0.5, // Adjust for desired effect
    },
  });

export default StoneInfoModal
