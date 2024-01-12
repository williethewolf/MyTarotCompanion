import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StoneCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.ImageURL }} style={styles.image} />
      <Text style={styles.title}>{item.Name[0]}</Text>
      <Text numberOfLines={3} style={styles.description}>
        {item.Description}
      </Text>
    </View>
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