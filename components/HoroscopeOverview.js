import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { useFonts, Carattere_400Regular } from '@expo-google-fonts/carattere';
import getUserZodiacSign from './getUserZodiacSigs';

const screenWidth = Dimensions.get('window').width;

const HoroscopeOverview = ({ user, horoscope }) => {

    //console.log(horoscope)
    const Capitalize = s =>s ? s[0].toUpperCase() + s.slice(1) : "";

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
                    <Text>A</Text>
                    </View>
                    <View style={styles.roundIconContainer}>
                    <Text>B</Text>
                    </View>
                    <View style={styles.roundIconContainer}>
                    <Text>C</Text>
                    </View>
                </View>
                <View style={styles.firstRowColumn2}>
                    <View style={styles.profileImageDecoration}>
                    <Image
                        source={{ uri: user.pFImage }}
                        style={styles.profileImage}
                    />
                    </View>
                </View>
                <View style={styles.firstRowColumn3}>
                    <View style={styles.roundIconContainer}>
                        <Text>D</Text>
                    </View>
                    <View style={styles.roundIconContainer}>
                        <Text>F</Text>
                    </View>
                    <View style={styles.roundIconContainer}>
                        <Text>G</Text>
                    </View>
                </View>
            </View>

            {/* Second Row */}
            <View style={styles.secondRow}>
            {/* Content for Second Row */}
            <Text style={styles.userName}>{user.name}</Text> 
            </View>

            {/* Third Row */}
            <View style={styles.thirdRow}>
            <View>
                <Text>Today's Horoscope</Text>
            {!horoscope ? (
                 <Text>Channeling the oracles...</Text>
            ) : (
            <>
                <Text>{Capitalize(getUserZodiacSign(user.dOB))}</Text>
                <Text>{horoscope.horoscope}</Text>
            </>
            )}
                </View>
                {/* <View style={styles.thirdRowColumn1}>
                <Image
                        source={{ uri: user.pFImage }}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.thirdRowColumn2}>
                <Image
                        source={{ uri: user.pFImage }}
                        style={styles.profileImage}
                    />
                </View> */}
            </View>

            {/* Fourth Row */}
            <View style={styles.fourthRow}>
                
                    <View style={styles.fourthRowColumn}>
                        <Text>OP</Text>
                    </View>
                    <View style={styles.fourthRowColumn}>
                        <Text>OP</Text>
                    </View>
                    <View style={styles.fourthRowColumn}>
                        <Text>OP</Text>
                    </View>
                    <View style={styles.fourthRowColumn}>
                        <Text>OP</Text>
                    </View>
                    <View style={styles.fourthRowColumnEnd}>
                        <Text>OP</Text>
                    </View>
            </View>

            {/* Fifth Row */}
            <View style={styles.fifthRow}>
                <View style={styles.fifthRowColumn}>
                    <View style={styles.roundIconContainer}>
                        <Text>O</Text>
                    </View>
                </View>
                <View style={styles.fifthRowColumn}>
                    <Text>MoneyMaker</Text>
                </View>
                <View style={styles.fifthRowColumn}>
                <View style={styles.roundIconContainer}>
                        <Text>O</Text>
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
        borderWidth:6,
        height:'100%',
        flexDirection:'column',
        // gap: 10,
        justifyContent: 'space-between',
        
    },
    firstRow: {
        flex:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:15,
    },
    firstRowColumn1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        //width: width*0.6 // 20% for outer columns, 60% for middle
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
    },
    profileImageDecoration: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondRow: {
        flex:2,
        borderWidth:2
    },
    userName:{
        textAlign: 'center',
        fontSize:40,
        fontFamily: 'Carattere_400Regular',
    },
    thirdRow: {
        flex:8,
        flexDirection: 'row',
        marginVertical:10,
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
        flex:3,
        flexDirection: 'row',
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
        margin:10,
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
        marginVertical: '10',
        justifyContent: 'center',
        alignItems: 'center',  }
});

export default HoroscopeOverview;
