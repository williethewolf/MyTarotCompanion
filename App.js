import { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated, PanResponder, SafeAreaView  } from 'react-native';
import { Image } from 'expo-image'
import styles from './styles'
//import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
//page components
import Header from './components/Header'
import SafeViewAndroid from "./components/SafeViewAndroid";
import Tarot from './pages/Tarot';


export default function App() {
  //states


  return (
    <SafeAreaView  style={[, SafeViewAndroid.AndroidSafeArea]}>
    <Header /> 
    <Tarot />
    </SafeAreaView >
  );
}

