// FirstScreen.js
//
//THIS IS OBSOLETE
//
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import firebase from '../firebaseConfig';
import auth from '../firebaseConfig';

const FirstScreen = () => {
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (user) {
                // User is signed in, navigate to Home
                navigation.navigate('../home/');
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
            <Text>Welcome to the CassandrApp!</Text>
            <Link href="../auth/LoginScreen">
            <Text>Log In</Text>
            </Link>
            <Text>Don't have an account yet?</Text>
            <Link href="../auth/SignUpScreen">
            <Text>Sign Up</Text>
            </Link>
        </View>
    );
};

export default FirstScreen;