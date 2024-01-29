import React from 'react'
import { Stack } from 'expo-router'
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