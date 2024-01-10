import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const MercuryRetrograde = ({ fontSize = 30}) => {
  const [isRetrograde, setIsRetrograde] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMercuryRetrograde = async () => {
      try {
        const response = await axios.get('https://mercuryretrogradeapi.com');
        if (response.data && typeof response.data.is_retrograde === 'boolean') {
          setIsRetrograde(response.data.is_retrograde);
        }
      } catch (error) {
        console.error('Error fetching Mercury retrograde data:', error);
      }
      setLoading(false);
    };

    checkMercuryRetrograde();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const textStyle = { fontSize: fontSize } ;
  return (
    <View>
      <Text style={{...textStyle,}}>
        {isRetrograde ? '℞' : 'Đ'}
      </Text>
    </View>
  );
};

export default MercuryRetrograde;