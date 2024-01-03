import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';
import HoroscopeOverview from '../../components/HoroscopeOverview';
import users from '../../data/users';
import axios from 'axios';
import getUserZodiacSign from '../../components/getUserZodiacSigs';
import tempHoroscopeData from '../../data/tempHoroscopeData';

const user = users.find(user => user.mainUser === true);
  //API IMPLEMENTATION, OBSOLETE FOR NOW
  // const getHoroscope = async (sign, day) => {

  //   if (process.env.EXPO_PUBLIC_USE_MOCK_API === 'true') {
  //     // API SAVER Return mock data
  //     return {
  //       date: "Mock Date", // Example date
  //       horoscope: "Your mock horoscope message goes here."
  //     };
  //   }
  //   // Real API call
  //   const apiKey = process.env.EXPO_PUBLIC_DAILY_HOROSCOPE_API_KEY;
  //   const apiURL = process.env.EXPO_PUBLIC_DAILY_HOROSCOPE_API_URL;
  //   const options = {
  //     method: 'GET',
  //     url: apiURL,
  //     params: { day, sunsign: sign },
  //     headers: {
  //       'X-RapidAPI-Key': apiKey
  //     }
  //   };
  
  //   try {
  //     const response = await axios.request(options);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getHoroscope = async (sign) => {
    return tempHoroscopeData.horoscopes.find(h => h.sign.toLowerCase() === sign.toLowerCase());

  }

export default function Dashboard() {
  
  const width = Dimensions.get('window').width;
  const [horoscope, setHoroscope] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        const userSign = getUserZodiacSign(user.dOB);
        const horoscopeData = await getHoroscope(userSign);
        setHoroscope(horoscopeData);
    };

    fetchData();
}, []);  
  
  //Data for the carousel
    const data = [
        { id: 1, type: 'UserProfile', content: <HoroscopeOverview user={user} horoscope={horoscope} /> },
        { id: 2, type: 'Dashboard', content: <HoroscopeOverview user={user} /> },
        { id: 3, type: 'Other', content: <HoroscopeOverview user={user} /> }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
           {item.content}
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                loop
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        // width: 300,
        // height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        height:'100%',
        margin: 10,
    },
});
