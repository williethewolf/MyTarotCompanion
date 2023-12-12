import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HamburgerMenu from '../components/HamburgerMenu'
import { SafeAreaView } from "react-native-safe-area-context"
import SafeViewAndroid from '../components/SafeViewAndroid'

const StackLayouts = () => {
  return (
    
    <SafeAreaView style={ SafeViewAndroid.AndroidSafeArea}>
            <Stack screenOptions={{ header: () => null }} />
        </SafeAreaView>

  )
}

export default StackLayouts