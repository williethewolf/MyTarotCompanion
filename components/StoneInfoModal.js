import React, { useState } from 'react';
import { Image } from 'expo-image';
import { Modal, View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import CapitalizeFirst from '../utils/CapitalizeFirst';

const StoneInfoModal =({ item, visible, onClose }) => {
    if (!item) return null;

    const defaultImagePath = require('../assets/stones/images/missing.png');
    const imageSource = item.ImageURL ? { uri: item.ImageURL } : defaultImagePath;

    const handleOverlayPress = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      > 
        <View style={styles.modalOverlay} onTouchEnd={onClose}>
            <View style={styles.modalContent} onTouchEnd={(e) => e.stopPropagation()}>
                <Image source={{ uri: item.ImageURL }} style={styles.modalImage} placeholder={defaultImagePath} transition={500} alt={item.name} />
                <Text style={styles.modalTitle}>{CapitalizeFirst(item.Name[0])}</Text>
                <ScrollView style={styles.descriptionScroll} onStartShouldSetResponder={() => true}>
                    <Text style={styles.descriptionText}>{item.Description}</Text>
                    {/* Add more content here */}
                </ScrollView>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={ {fontSize:20}}>X</Text> 
                    {/* Customize as needed */}
                </TouchableOpacity>
                </View>
            </View>
      </Modal>
    );
  };
  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalImage: {
      width: '100%',
      height: 200, // Adjust as needed
      borderRadius: 10,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
      },
    descriptionScroll: {
      maxHeight: Dimensions.get('window').height / 3, // Adjust as needed
    },
    descriptionText: {
      fontSize: 16,
      color: 'black',
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      // Add more styling for the close button
    },
  });

export default StoneInfoModal
