import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, TextInput, Button, Text, Animated, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { createUser } from '../../components/auth';
import {useNavigation } from 'expo-router';
import LoginErrorModal from '../../components/LoginErrorModal';
import { isTablet, scaleSize } from '../../utils/ResponsiveSizes';
import { useFonts } from 'expo-font';

import TwinklingBackground from '../../components/TwinklingBackground';

import appLogo from '../../assets/brand/Cassandrapp_logo.png'

//pickers imports
import DateTimePicker from '@react-native-community/datetimepicker';
//import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox'; 
import RNPickerSelect from 'react-native-picker-select';

const WelcomeText =  ({ setShowNameInput })  => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // For "Welcome to" text
    const logoFadeAnim = useRef(new Animated.Value(0)).current;
    const moveAnim =  useRef(new Animated.Value(scaleSize(150))).current; // For moving the whole section

    useEffect(() => {
        // Fade in the "Welcome to" text
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            delay: 2000
        }).start(() => {
            // After a delay, fade in the logo and app name
            Animated.timing(logoFadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
                delay: 500, // Delay for the logo fade-in
            }).start();
            
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
                delay: 3000
            }).start(),

            // Move the whole section up
            Animated.timing(moveAnim, {
                toValue: -scaleSize(90),
                duration: 1000,
                useNativeDriver: true,
                delay: 4000,
            }).start(() =>{
                setShowNameInput(true)
            });
        });
    }, []);
    
    return (
        <Animated.View style={[styles.welcomeSection, { transform: [{ translateY: moveAnim }] }]} >
        <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Welcome to</Animated.Text>
        <Animated.View style={{ alignItems: 'center', opacity: logoFadeAnim }}>
            <Image
                style={styles.logo}
                source={appLogo}
            />
            <Text style={[styles.welcomeText, { fontSize: scaleSize(50), marginTop: -scaleSize(40) }]}>
                CassandrApp
            </Text>
        </Animated.View>
    </Animated.View>
    );
};

const NameInputSection = ({ onContinue, isVisible }) => {
    const [name, setName] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const buttonFadeAnim = useRef(new Animated.Value(0)).current; // For the Continue button fade in
  
    useEffect(() => {
      if (isVisible) {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
            // Only start the button fade-in animation if there's text
            if (name.length > 0) {
              Animated.timing(buttonFadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
              }).start();
            }
          });
        }
      }, [isVisible, name.length]);

      const handlePressContinue = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => onContinue(name));
      };
  
      return (
        <Animated.View style={[styles.nameInputSection, { opacity: fadeAnim }]}>
          <Text style={styles.inputLabel}>Please, tell us your name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            onChangeText={setName}
            value={name}
          />
          {name.length > 0 && (
            <Animated.View style={{ opacity: buttonFadeAnim }}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handlePressContinue}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </Animated.View>
      );
  };

  const BirthPlaceDetailsSection = ({ userInfo, setUserInfo, isVisible, onContinue }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const buttonFadeAnim = useRef(new Animated.Value(0)).current;
    const [textVisible, setTextVisible] = useState(false);
    const textFadeAnim1 = useRef(new Animated.Value(0)).current;
    const textFadeAnim2 = useRef(new Animated.Value(0)).current;

    const [birthPlace, setBirthPlace] = useState(null)


    useEffect(() => {
        if (isVisible) {
            Animated.sequence([
                // First fade in for the initial text
                Animated.timing(textFadeAnim1, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                // Delay between the texts
                Animated.delay(1000),
                // Second text fade in
                Animated.timing(textFadeAnim2, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                // Delay before showing the rest of the content
                Animated.delay(1000),
                // Fade in the rest of the section content
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                // Only start the button fade-in animation if there's text
                if (userInfo.birthPlace.length > 0) {
                  Animated.timing(buttonFadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }).start();
                }
              });
            }
    }, [isVisible]);


    const handleBirthPlaceChange = (birthPlace) => {
        setBirthPlace(birthPlace);
    };

    const handlePressContinue =(birthPlace)=>{
        onContinue(birthPlace)
    }


    return (
        <View style={styles.birthDetailsContainer}>
            <Animated.Text style={[styles.fadeInText, { opacity: textFadeAnim1, fontSize: scaleSize(30) }]}>
                Where were you born, {userInfo.name}?
            </Animated.Text>
            <Animated.Text style={[styles.fadeInText, { opacity: textFadeAnim2 }]}>
                This will help us draw the stars for you.
            </Animated.Text>
            <Animated.View style={{ opacity: fadeAnim, flexDirection: 'column', alignItems: 'center' }}>
            <RNPickerSelect
            onValueChange={(value) => handleBirthPlaceChange(value)}
            items={[
                { label: 'United States', value: 'US' },
                { label: 'Canada', value: 'CA' },
                // Add other countries as needed
            ]}
            style={{
                ...pickerSelectStyles,
                placeholder: { color: 'white' }, // Adjust color to ensure visibility
            }}
            placeholder={{
                label: 'Select a country...',
                value: null,
                color: 'grey', // Placeholder text color for visibility
            }}
            />
            <Animated.View style={{ opacity: buttonFadeAnim }}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handlePressContinue}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </Animated.View>
            </Animated.View>
    </View>
    );
};
  const BirthTimeDetailsSection = ({ userInfo, setUserInfo, isVisible, onContinue }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const buttonFadeAnim = useRef(new Animated.Value(0)).current;
    const [textVisible, setTextVisible] = useState(false);
    const textFadeAnim1 = useRef(new Animated.Value(0)).current;
    const textFadeAnim2 = useRef(new Animated.Value(0)).current;
    
    // Initialize with a default date to avoid the error, but control visibility/rendering based on user actions
    const [date, setDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [time, setTime] = useState(null);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [timeUnknown, setTimeUnknown] = useState(false);

    const defaultDate = new Date()

    useEffect(() => {
        if (isVisible) {
            Animated.sequence([
                // First fade in for the initial text
                Animated.timing(textFadeAnim1, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                // Delay between the texts
                Animated.delay(1000),
                // Second text fade in
                Animated.timing(textFadeAnim2, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                // Delay before showing the rest of the content
                Animated.delay(1000),
                // Fade in the rest of the section content
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                // Only start the button fade-in animation if there's text
                if (userInfo.birthPlace.length > 0) {
                  Animated.timing(buttonFadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }).start();
                }
              });
            }
    }, [isVisible]);

        const onChangeDate = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(Platform.OS === 'ios');
            setDate(currentDate);
          };

          const onChangeTime = (event, selectedTime) => {
            const currentTime = selectedTime || time;
            setShowTimePicker(Platform.OS === 'ios');
            setTime(currentTime);
          };

    const toggleTimeUnknown = () => {
        setTimeUnknown(!timeUnknown);
        setUserInfo(prev => ({ ...prev, timeUnknown: !prev.timeUnknown }));
      };

      const handlePressContinue =(date, time, timeUnknown)=>{
        onContinue(date, time, timeUnknown)
    }

    const DisplayPickedDateTime = ({ date, time, timeUnknown }) => {
        // Format the date and time into readable strings
        const formatDate = date ? date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }) : '';
        const formatTime = time ? time.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true }) : '';
        //Time split to adjust font size for AM/PM
        const [timeMain, amPm] = formatTime ? formatTime.match(/(\d+:\d+)\s?(AM|PM)/i).slice(1) : ['', ''];
        return (
            <View style={dateStyles.container}>
              <Text style={dateStyles.text}>{formatDate}</Text>
              {!timeUnknown && time && (
                <>
                  <Text style={dateStyles.time}> at {timeMain}</Text>
                  <Text style={dateStyles.amPm}> {amPm}</Text>
                </>
              )}
              {timeUnknown && <Text style={[dateStyles.time,{fontSize:scaleSize(20)}]}> Time unknown</Text>}
            </View>
        );
    };

      
    const dateStyles = StyleSheet.create({
        container: {
            flexDirection:'row',
            marginTop: -scaleSize(0), // Adjust as needed
            alignItems:'center'
        },
        text: {
            fontFamily: 'Young-Serif',
            color: 'white', 
            fontSize: scaleSize(25), 
        },
        time: {
            fontFamily: 'Young-Serif',
            color: 'white',
            fontSize: scaleSize(25), 
        },
        amPm: {
            fontFamily: 'Young-Serif',
            color: 'white',
            fontSize: scaleSize(18), 
        },
      });

    return (
        <View style={styles.birthDetailsContainer}>
  <Animated.Text style={[styles.fadeInText, { opacity: textFadeAnim1, fontSize: scaleSize(30) }]}>
    When?
  </Animated.Text>
  <DisplayPickedDateTime date={date} time={time} timeUnknown={timeUnknown} />
  <Animated.Text style={[styles.fadeInText, { opacity: textFadeAnim2, marginHorizontal:scaleSize(30), fontSize: scaleSize(15) }]}>
    If you don't know the exact time, check the box and we will try our best to approximate.
  </Animated.Text>
  <Animated.View style={{ opacity: fadeAnim, flexDirection: 'column', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: scaleSize(300) }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.fadeInText, { fontSize: scaleSize(10) }]}>Select your birth date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={{ fontSize: scaleSize(30) }}>🗓️</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date || defaultDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.fadeInText, { fontSize: scaleSize(10) }]}>Select your birth time</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} disabled={timeUnknown}>
          <Text style={{ fontSize: scaleSize(30), color: timeUnknown ? 'grey' : 'black' }}>🕐</Text>
        </TouchableOpacity>
        {showTimePicker && !timeUnknown && (
          <DateTimePicker
            testID="timeTimePicker"
            value={time || defaultDate}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleSize(10) }}>
          <CheckBox
            disabled={false}
            value={timeUnknown}
            onValueChange={(newValue) => {
              setTimeUnknown(newValue);
              if (newValue) {
                // Set time to noon
                const noonTime = new Date(date);
                noonTime.setHours(12, 0, 0);
                setTime(noonTime);
                setShowTimePicker(false); // Hide time picker if "I don't know my birth time" is checked
              }
            }}
          />
          <Text style={{ marginLeft: scaleSize(8) }}>I don't know my birth time</Text>
        </View>
      </View>
    </View>
    <Animated.View style={{ opacity: buttonFadeAnim }}>
        <TouchableOpacity
        style={styles.continueButton}
        onPress={handlePressContinue}
        >
        <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
    </Animated.View>
  </Animated.View>
</View>
    );
};

  const ConfirmationSection = () => {
    return (
      <View style={styles.confirmationSection}>
        <Text style={styles.confirmationText}>Is this you?</Text>
        {/* Display user information here */}
        {/* Buttons 'No' and 'Yes' will be added here */}
      </View>
    );
  };
  

const SignUpScreen = () => {
    
    const [userInfo, setUserInfo] = useState({
        name: '',
        birthDate: null,
        birthTime: null,
        birthPlace: 'a', //change after debbugging, this is so the button shows up while testing
        birthPlaceCoords:'',
        timeUnknown: false,
        email: '',
        password:'',
    });
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
//Animated visible flow states
    const [showNameInput, setShowNameInput] = useState(false);
    const [showBirthTimeDetails, setShowBirthTimeDetails] = useState(false);
    const [showBirthPlaceDetails, setShowBirthPlaceDetails] = useState(false);
    const [showCardDetails, setShowCardDetails] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        // Reset states when the component mounts
        setShowNameInput(false);
        setShowBirthTimeDetails(false);
        setShowBirthPlaceDetails(false);
        setShowCardDetails(false);
    
        // Any other initialization logic can go here
    }, []);

    //fonts
    const [fontsLoaded] = useFonts({
        'Young-Serif': require('../../assets/fonts/YoungSerif-Regular.ttf'),
      });
     

    if (!fontsLoaded) {
        return <Text>Loading...</Text>; 
    }

// In your TextInput onChange handler
const handleNameContinue = (name) => {
        setUserInfo(prev => ({ ...prev, name }));
    //trigger closing view hook
    setShowNameInput(false);
    // Show next stage view
    setTimeout(() => setShowBirthPlaceDetails(true), 500)
  };
  const handleBirthPlaceContinue = (birthPlace) => {
          setUserInfo(prev => ({ ...prev, birthPlace }));
      //trigger closing view hook
      setShowBirthPlaceDetails(false);
      // Show next stage view
      setTimeout(() => setShowBirthTimeDetails(true), 500)
    };
  const handleBirthTimeContinue = (date, time, timeUnknown) => {
    setUserInfo(prev => ({ ...prev, birthDate: date, birthTime: time, timeUnknown: timeUnknown }));
    //trigger closing view hook
      setShowBirthTimeDetails(false);
      // Show next stage view
      setTimeout(() => showCardDetails(true), 500)
    };
  
//SIGNING UP
    const handleSignUp = () => {
        if (!email || !password) {
            const errorMessage = "Please enter both email and password.";
            setError(errorMessage);
            setModalVisible(true);
            return; // Stop the function if validation fails
        }

        createUser(email, password)
            .then(() => navigation.navigate('./home')) // Navigate to Home on successful sign up
            .catch(error => console.log(error)); // Handle errors
    };

    return (
        <View style={styles.container}>
          <TwinklingBackground />
        <WelcomeText setShowNameInput={setShowNameInput} />
            {showNameInput && <NameInputSection onContinue={handleNameContinue} isVisible={showNameInput} />}
            {showBirthPlaceDetails && <BirthPlaceDetailsSection onContinue={handleBirthPlaceContinue} userInfo={userInfo} setUserInfo={setUserInfo} isVisible={showBirthPlaceDetails} />}
            {showBirthTimeDetails && <BirthTimeDetailsSection onContinue={handleBirthTimeContinue} userInfo={userInfo} setUserInfo={setUserInfo} isVisible={showBirthTimeDetails} />}
            {showCardDetails && <ConfirmationSection />}
        </View>
      );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    welcomeSection: {
        // position: 'absolute',
        // top: '10%', // Adjust as necessary to center the logo vertically at the start
        // left: 0,
        // right: 0,
      alignItems: 'center',
      marginTop:scaleSize(30),
    },
    welcomeText: {
      color: 'white', 
      fontSize: scaleSize(50),
      fontFamily: 'Young-Serif'
    },
    nameInputSection: {
        position: 'absolute',
        top: '30%', // Adjust as needed to position correctly
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: scaleSize(20), 
        marginTop:scaleSize(60),
      },
      inputLabel: {
        width:scaleSize(300),
        fontSize: scaleSize(30),
        fontFamily: 'Young-Serif',
        color: 'white',
      },
      input: {
        backgroundColor: 'white',
        borderRadius: scaleSize(35), // Pill shape
        padding: scaleSize(15),
        width: scaleSize(200), // Adjust as needed
        marginTop: scaleSize(15),
      },
    confirmationSection: {
      flex: 1, // Remaining space
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmationText: {
      color: 'white', 
      fontSize: scaleSize(30), 
    },
    logo:{
        width:scaleSize(150),
        height:scaleSize(150),
    },
    continueButton: {
        backgroundColor: '#FFDAB9', // Peach hue
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(20),
        borderRadius: scaleSize(25), // Creates a pill shape
        marginTop: scaleSize(10),
    },
    continueButtonText: {
        color: 'white',
        textAlign: 'center',
        // Add any additional text styling here
    },
    fadeInText: {
        color: 'white',
        fontFamily: 'Young-Serif',
        fontSize: scaleSize(20), // Adjust as needed
        //textAlign: 'center',
        marginVertical: scaleSize(5),
        marginHorizontal: scaleSize(10)
    },
    BirthInputSection: {
        position: 'absolute',
        top: '30%', // Adjust as needed to position correctly
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: scaleSize(20),
        marginTop:scaleSize(50),
      },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: scaleSize(16),
      paddingVertical: scaleSize(12),
      paddingHorizontal: scaleSize(10),
      borderWidth: scaleSize(1),
      borderColor: 'gray',
      borderRadius: scaleSize(4),
      color: 'black',
      paddingRight: scaleSize(30), // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: scaleSize(16),
      paddingHorizontal: scaleSize(10),
      paddingVertical: scaleSize(8),
      borderWidth: scaleSize(0.5),
      borderColor: 'purple',
      borderRadius: scaleSize(8),
      color: 'black',
      paddingRight: scaleSize(30), // to ensure the text is never behind the icon
    },
  });