import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';
import firebase from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../firebaseConfig';

const index = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <View style={styles.container}><ActivityIndicator size="large" /></View>;
  }

  if (user) {
    // User is logged in, redirect to Dashboard
    return <Redirect href='../home/Dashboard' />;
  } else {
    // User is not logged in, redirect to Login
    return <Redirect href='../auth/LoginScreen' />; // Adjust the path to your Login screen
  }
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%'
  },
});
