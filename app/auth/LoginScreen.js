import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { signInUser } from '../../components/auth';
import { Link, useNavigation } from 'expo-router';
import { isTablet, scaleSize } from '../../utils/ResponsiveSizes';
import LoginErrorModal from '../../components/LoginErrorModal';
import FirebaseFriendlyErrorMessage from '../../components/FirebaseFriendlyErrorMessage ';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const handleLogin = () => {
        if (!email || !password) {
            const errorMessage = "Please enter both email and password.";
            setError(errorMessage);
            setModalVisible(true);
            return; // Stop the function if validation fails
        }

        signInUser(email, password)
            .then(() => {
                setError(''); // Clear any previous errors
                setModalVisible(false);
                navigation.navigate('../home/Dashboard');
            })
            .catch(error => {
                const friendlyMessage = FirebaseFriendlyErrorMessage(error.code)
                setError(friendlyMessage); // Set error message to display
                setModalVisible(true)
            });
    };

    ////UNCOMMENT TO IMPLEMENT GOOGLE SIGNIN
    // const handleGoogleLogin = () => {
    //     googleSignIn()
    //         .then(() => {
    //             // Successful Google Sign-In
    //             navigation.navigate('../home/Dashboard');
    //         })
    //         .catch(error => {
    //             // Handle Errors here.
    //             const friendlyMessage = FirebaseFriendlyErrorMessage(error.code);
    //             setError(friendlyMessage);
    //             setModalVisible(true);
    //         });
    // };

    return (
        <View style={styles.container}>
            <LoginErrorModal 
                error={error} 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
            />
            <View style={styles.card}>
                <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.input} />
                <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry style={styles.input} />
                <View style={styles.buttonContainer}>
                    <Button title="Log In" onPress={handleLogin} color="#c4ae7e" />
                </View>
                {/* //UNCOMMENT TO IMPLEMENT GOOGLE SIGNIN */}
                {/* <View style={styles.buttonContainer}>
                    <Button title="Sign in with Google" onPress={handleGoogleLogin} color="#c4ae7e" />
                </View> */}
                <Text>Don't have an account yet?</Text>
                <Link href="../auth/SignupScreen" asChild>
                    <Button title="Sign Up" color="#c4ae7e" />
                </Link>
            </View>
            {/* Development Link */}
            <Link href="../home/Dashboard" style={styles.devLink}>
                <Text>No login entry for development</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c131c'
    },
    card: {
        backgroundColor: '#FFFCF0',
        padding: scaleSize(20),
        borderRadius: scaleSize(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:'80%',
        maxWidth:scaleSize(350),
    },
    input: {
        marginBottom: scaleSize(10),
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(15),
        borderRadius: scaleSize(25),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonContainer: {
        marginTop: scaleSize(10),
        borderRadius: scaleSize(20),
        overflow: 'hidden',
    },
    devLink: {
        marginTop: scaleSize(20),
        alignSelf: 'center',
    },
});

export default LoginScreen;