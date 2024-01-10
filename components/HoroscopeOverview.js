import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import getUserZodiacSign from './getUserZodiacSign';
import { Image } from 'expo-image';
import Carousel from 'react-native-reanimated-carousel';

//Image Imports
import getZodiacImage from './getZodiacImage';
import getElementImage from './getElementImage';

import MoonPhase from './MoonPhase';
import MercuryRetrograde from './MercuryRetrograde';

const screenWidth = Dimensions.get('window').width;




const HoroscopeOverview = ({ user, horoscope }) => {

    const [todayISODate, setTodayISODate] = useState(new Date().toISOString())
    const [todayDate, setTodayDate] = useState(new Date().toDateString())

    const currentSign = getUserZodiacSign(todayISODate);
    //console.log(horoscope)
    const Capitalize = s =>s ? s[0].toUpperCase() + s.slice(1) : "";
    const userZodiac= getUserZodiacSign(user.dOB);
    const zodiacImagePath = getZodiacImage(userZodiac.name);
    const elementImagePath = getElementImage(userZodiac.element);

    useEffect(() => {
        const todayISOdate = () =>{
            const date = new Date();
            setTodayDate(date.toDateString())
            setTodayISODate(date.toISOString());
        };
        todayISOdate();
    }, []);

   // Carousel configuration
   const carouselConfig = {
        width: 125,
        height: 125,
        loop: true,
        autoPlay: false,
        snapEnabled: true,
    };
    // Render Item for Carousel
    const renderCarouselItem = (item, backgroundColor) => (
        <View style={{ width: carouselConfig.width, height: carouselConfig.height, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={getZodiacImage(item)}
                style={{...styles.profileImage, height:'95%', width:'95%', backgroundColor}}
            />
            <Text style={{position:'absolute', bottom:10, color:'white'}}>{item}</Text>
        </View>
    );

    let [fontsLoaded] = useFonts({
        Carattere_400Regular,
      });
    
      if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
      }
    
    return (
        <View style={styles.container}>
            {/* First Row */}
            <View style={styles.firstRow}>
                <View style={styles.firstRowColumn1}>
                    <View style={styles.roundIconContainer}>
                    <Image
                    source={zodiacImagePath}
                    style={styles.smallRoundIcon}
                 />
                    </View>
                    <View style={styles.roundIconContainer}>
                    <Image
                    source={getZodiacImage('Cancer')}
                    style={styles.smallRoundIcon}
                 />
                    </View>
                    <View style={styles.roundIconContainer}>
                    <Image
                    source={getZodiacImage('Libra')}
                    style={styles.smallRoundIcon}
                 />
                    </View>
                </View>
                <View style={styles.firstRowColumn2}>
                    <View style={{...styles.profileImageDecoration, 
                                width: 170,
                                height: 170,}}>
                    <View style={{...styles.profileImageDecoration, 
                                borderWidth:10,
                                borderColor:"#e0bda2"
                                }}>
                    <Image
                        source={{ uri: user.pFImage }}
                        style={styles.profileImage}
                    />
                    </View>
                    </View>
                </View>
                <View style={styles.firstRowColumn3}>
                    <View style={styles.roundIconContainer}>
                        <Text style={{fontSize:20,}}>{userZodiac.luckyNumber}</Text>
                    </View>
                    <View style={{...styles.roundIconContainer, }}>
                        <Text style={{fontSize:40,}}>{userZodiac.rulerSymbol[0]}</Text>
                    </View>
                    <View style={styles.roundIconContainer}>
                    <Image
                    source={elementImagePath}
                    style={styles.elementSmallRoundIcon}
                 />
                    </View>
                </View>
            </View>

            {/* Second Row */}
            <View style={styles.secondRow}>
            {/* Content for Second Row */}
                <View style={styles.nameBox}>
                    <Text style={styles.userName}>{user.name}</Text> 
                </View>
            <View>
                <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                <Text>Today's Horoscope</Text>
                <Text>{new Date().toDateString()}</Text>
                </View>
            {!horoscope ? (
                 <Text>Channeling the oracles...</Text>
            ) : (
            <>
                
                <View style={{flexDirection:'column', alignItems:'center', borderWidth:0.5, margin:10, padding:10,}}>
                    <View style={{flexDirection:'row'}}>
                        <Text>{userZodiac.name}</Text>
                        <Image
                            source={zodiacImagePath}
                            style={{
                            width: 20,
                            height: 20,
                            }}
                        />
                    </View>
                    <View>
                        <Text>{horoscope.horoscope}</Text>
                    </View>
                 </View>
                 
            </>
            )}
                </View>
            </View>

            {/* Third Row */}
            <View style={styles.thirdRow}>
                <View style={{ justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{fontSize:20, textAlign:'center',}}>Compatibility</Text>
                </View>
                <View style={styles.thirdRowBottom}>
                    <View style={styles.thirdRowColumn1}>
                    <Carousel
                            {...carouselConfig}
                            data={userZodiac.compatibleWith}
                            renderItem={({ item }) => renderCarouselItem(item, '#6d89a6')}
                        />
                    </View>
                    <View style={styles.thirdRowColumn2}>
                    <Carousel
                            {...carouselConfig}
                            data={userZodiac.incompatibleWith}
                            renderItem={({ item }) => renderCarouselItem(item, '#bd9382')}
                        />
                    </View>
                </View>
            </View>

            {/* Fourth Row */}
            <View style={styles.fourthRow}>
                
                    <View style={styles.fourthRowColumn}>
                    <Image
                        source={getZodiacImage(currentSign.name)}
                        style={{
                            width: 30,
                            height: 30,
                            }}
                    />
                    </View>
                    <View style={styles.fourthRowColumn}>
                        <View style={{ position: 'relative', top:-12, lineHeight:35}}>
                            <Text style={{ textAlign:'center', top:10,}}>☿</Text>
                            <MercuryRetrograde/>
                        </View>
                    </View>
                    <View style={styles.fourthRowColumn}>
                        <MoonPhase display="symbol"/>
                    </View>
                    <View style={styles.fourthRowColumn}>
                        <Text>🜚︎</Text>
                    </View>
                    <View style={styles.fourthRowColumnEnd}>
                        <Text>🜨</Text>
                    </View>
            </View>

            {/* Fifth Row */}
            <View style={styles.fifthRow}>
                <View style={styles.fifthRowColumn}>
                    <View style={styles.roundIconContainer}>
                        <Text style={{fontSize:60,  lineHeight:52, textAlignVertical:'center', transform: [{ rotate: '180deg' }]}}>⤗</Text>
                    </View>
                </View>
                <View style={styles.fifthRowColumn}>
                    <Text>Overview</Text>
                </View>
                <View style={styles.fifthRowColumn}>
                <View style={styles.roundIconContainer}>
                        <Text style={{fontSize:60,  lineHeight:50, textAlignVertical:'center'}}>⤗</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: 0.9*screenWidth,
        //borderWidth:6,
        height:'100%',
        flexDirection:'column',
        // gap: 10,
        justifyContent: 'space-between',
        marginBottom:10,
        
    },
    firstRow: {
        flex:4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        borderColor:"#7a4a3d",
        borderBottomWidth:0.5,
    },
    firstRowColumn1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        //width: width*0.6 // 20% for outer columns, 60% for middle
    },
    smallRoundIcon: {
        width:30,
        height:30,
    },
    elementSmallRoundIcon: {
        width:45,
        height:45,
    },
    firstRowColumn2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center', 
        //width: width*0.6// 20% for outer columns, 60% for middle
    },
    firstRowColumn3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // 20% for outer columns, 60% for middle
        paddingRight:20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // Circular Image
        borderWidth:1,
        borderColor:"#7a4a3d",
    },
    profileImageDecoration: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:"#7a4a3d"
    },
    secondRow: {
        flex:4,
        //borderWidth:2
    },
    nameBox:{
        alignSelf: 'center',
        paddingHorizontal: 60,
        borderRadius: 50,
        borderColor:'#c4ae7e',
        borderWidth:1,
    },
    userName:{
        textAlign: 'center',
        fontSize:30,
        fontFamily: 'Carattere_400Regular',
    },
    thirdRow: {
        flex:3,
        //flexDirection: 'row',
        //marginVertical:10,
    },
    thirdRowBottom: {
        flexDirection: 'row',
        marginVertical:5,
    },
    thirdRowColumn1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:1,
    },
    thirdRowColumn2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLefttWidth:1,
    },
    fourthRow: {
        flex:2,
        flexDirection: 'row',
        marginTop:20,
    },
    fourthRowColumn: {
        flex: 1, // Equal width columns
    },
    fourthRowColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:1, 
    },
    fourthRowColumnEnd: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fifthRow: {
        flex:1,
        flexDirection: 'row',
        borderWidth:1,
        borderRadius:200,
        margin:5,
    },
    fifthRowColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundIconContainer: {
        width:50,
        height:50,
        borderWidth: 1,
        borderRadius: 150,
        borderColor:"#7a4a3d",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:3,  
    }
});

export default HoroscopeOverview;
