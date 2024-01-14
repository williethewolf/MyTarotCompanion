import React, { useState, useMemo } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import StoneCard from '../../components/StoneCard';
import stoneData from '../../data/structured_stones_data.json'
import StoneInfoModal from '../../components/StoneInfoModal';



const Stones = () => {
  const [query, setQuery] = useState('');
  const data = stoneData;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData = useMemo(() => {
    return data.filter(item => 
      item.Name[0].toLowerCase().includes(query.toLowerCase()) ||
      item.Description.toLowerCase().includes(query.toLowerCase())
      // Add more conditions as necessary
    );
  }, [query]);

  const renderItem = ({ item }) => (
    <StoneCard item={item} onPress={handleCardPress} />
  );

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setQuery}
        value={query}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.Name[0] + index}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListFooterComponent={<View style={{ height: 50 }} />} // Adjust the height as needed
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