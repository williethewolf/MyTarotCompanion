import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import CapitalizeFirst from '../utils/CapitalizeFirst';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

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
        {item.Description}
      </Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 5,
    padding: 10
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5
  }
});

export default StoneCard;