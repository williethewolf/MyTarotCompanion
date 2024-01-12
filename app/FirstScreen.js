// FirstScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from '../firebaseConfig';
import auth from '../firebaseConfig';

const FirstScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (user) {
                // User is signed in, navigate to Home
                navigation.navigate('Home');
            } else {
                // No user is signed in, stay on this screen
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <View>
            <Text>Welcome to the app!</Text>
            <Button title="Log In" onPress={() => navigation.navigate('Login')} />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
};

export default FirstScreen;