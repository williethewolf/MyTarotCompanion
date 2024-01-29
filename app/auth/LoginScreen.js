import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button,} from 'react-native';
import { signInUser } from '../../components/auth';
import { Link, useNavigation } from 'expo-router';
import { isTablet, scaleSize } from '../../utils/ResponsiveSizes'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        signInUser(email, password)
            .then(() => navigation.navigate('../home/Dashboard'))
            .catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.input} />
                <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry style={styles.input} />
                <View style={styles.buttonContainer}>
                    <Button title="Log In" onPress={handleLogin} color="#c4ae7e" />
                </View>
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
        padding: 20,
        borderRadius: 10,
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
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 25,
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
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    devLink: {
        marginTop: 20,
        alignSelf: 'center',
    }
});

export default LoginScreen;