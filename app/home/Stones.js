import React, { useState, useMemo } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import StoneCard from '../../components/StoneCard';
import stoneData from '../../data/structured_stones_data.json'
import StoneInfoModal from '../../components/StoneInfoModal';
import { isTablet, scaleSize } from '../../utils/ResponsiveSizes'


const Stones = () => {
  const [query, setQuery] = useState('');
  const data = stoneData;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedWord, setSelectedWord] = useState('');

  const getMatchingWords = (query, data) => {
    if (!query.trim()) return []; // Return empty if query is empty
  
    const queryLower = query.toLowerCase();
    const wordSet = new Set();
  
    data.forEach(item => {
      const words = item.Description.split(/\s+/).map(word => word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, ""));
      words.forEach(word => {
        const wordLower = word.toLowerCase();
        if (wordLower.startsWith(queryLower)) {
          wordSet.add(wordLower);
        }
      });
    });
  
    return Array.from(wordSet).sort((a, b) => a.length - b.length || a.localeCompare(b)); // Sort by length, then alphabetically
  };

  const matchingWords = useMemo(() => getMatchingWords(query, stoneData), [query, stoneData]);

  const filteredData = useMemo(() => {
    if (selectedWord) {
      // Filter based on the selected word
      return stoneData.filter(item => {
        const itemText = (item.Name[0] + ' ' + item.Description).toLowerCase();
        const words = itemText.split(/\s+/).map(word => word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, ""));
        return words.includes(selectedWord.toLowerCase());
      });
    } else if (query) {
      // Filter based on the query if there's no selected word
      const queryLower = query.toLowerCase();
      return stoneData.filter(item => {
        const itemText = (item.Name[0] + ' ' + item.Description).toLowerCase();
        const words = itemText.split(/\s+/).map(word => word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, ""));
        return words.some(word => word.startsWith(queryLower));
      });
    } else {
      // Show all data if neither query nor selected word is present
      return stoneData;
    }
  }, [query, selectedWord, stoneData]);

  

  const renderItem = ({ item }) => (
    <StoneCard item={item} onPress={handleCardPress} />
  );

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={{flex:1, margin:5, justifyContent: 'center', alignItems: 'center',}}>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => { setQuery(text); setSelectedWord(''); }}
        value={query}
      />
      {query && (
       <ScrollView horizontal style={styles.tagContainer}>
        {matchingWords.map((word, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedWord(word === selectedWord ? '' : word)} style={selectedWord === word ? styles.selectedTagPills : styles.tagPills}>
            <Text style={styles.tagPillText}>{word}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      )}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.Name[0] + index}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: scaleSize(50) }}
        ListFooterComponent={<View style={{ height: scaleSize(50) }} />}
        style={{paddingVertical:0, width:'98%'}}
      />
      <StoneInfoModal
        item={selectedItem}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default Stones

const styles = StyleSheet.create({
  tagContainer:{
    width: '95%',
    //maxHeight: scaleSize(30),
    marginTop: scaleSize(5),
    height:scaleSize(40)
  },
  tagPills: {
    justifyContent: 'center', // Align children along the cross axis
    alignItems: 'center', // Align children along the main axis
    borderRadius: scaleSize(15), // Adjust as needed
    backgroundColor: '#f5e5ba',
    marginHorizontal: scaleSize(2),
    paddingHorizontal: scaleSize(6),
    height: scaleSize(24), // Explicit height for the tags
    marginVertical: scaleSize(3),
    elevation: scaleSize(3),
  },
  selectedTagPills: {
    justifyContent: 'center', // Align children along the cross axis
    alignItems: 'center', // Align children along the main axis
    borderRadius: scaleSize(15), // Adjust as needed
    backgroundColor: '#f5efe1', // Lighter background color
    borderColor: '#a38746', // Border color
    borderWidth: 1, // Border width
    marginHorizontal: scaleSize(2),
    paddingHorizontal: scaleSize(6),
    height: scaleSize(24), // Explicit height for the tags
    marginVertical: scaleSize(3),
    elevation: scaleSize(3),
  },
  tagPillText: {
    color: '#0e0f17', // Text color
    textAlign: 'center', // Center text
    fontSize: scaleSize(12),
    lineHeight: scaleSize(24),
  },
})