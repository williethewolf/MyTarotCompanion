import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createUser } from '../../components/auth'; // Assuming createUser function exists in auth.js

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        createUser(email, password)
            .then(() => navigation.navigate('Home')) // Navigate to Home on successful sign up
            .catch(error => console.log(error)); // Handle errors
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

export default SignUpScreen;