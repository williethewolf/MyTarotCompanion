import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import CapitalizeFirst from '../utils/CapitalizeFirst';
import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const stripMarkdown = (markdownText) => {
  const strippedText = markdownText
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italics
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1') // Remove links
    // Add more replacements as needed
  return strippedText;
};

const StoneCard = ({ item , onPress}) => {
    
    const defaultImagePath = require('../assets/stones/images/missing.png');
    const imageSource = item.ImageURL ? { uri: item.ImageURL } : defaultImagePath;
    //console.log(imageSource)
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.card}>
    <View>
    {/* <Image source={{ uri: item.ImageURL }} restore when images are hosted */}
      <Image source={imageSource} style={styles.image} placeholder={defaultImagePath} transition={500} alt={item.name} />
      <Text style={styles.title}>{CapitalizeFirst(item.Name[0])}</Text>
      <Text numberOfLines={3} style={styles.description}>
          {stripMarkdown(item.Description)}
        </Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: scaleSize(10),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: scaleSize(5),
    padding: scaleSize(10)
  },
  image: {
    width: '100%',
    height: scaleSize(150),
    borderRadius: scaleSize(10)
  },
  title: {
    fontSize: scaleSize(16),
    fontWeight: 'bold',
    marginTop: scaleSize(5)
  },
  description: {
    fontSize: scaleSize(12),
    color: 'gray',
    marginTop: scaleSize(5)
  }
});

export default StoneCard;