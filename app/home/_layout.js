import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HamburgerMenu from '../../components/HamburgerMenu'
import StyledTitle from '../../components/StyledTitle'
import NavigationMenuButton from '../../components/NavigationMenuButton'
import { PieMenuProvider } from '../../Context';
import PieMenuOverlay from '../../components/PieMenuOverlay'

const StackLayouts = () => {
  return (
    <PieMenuProvider>
      {/* Render PieMenuOverlay */}
    <Stack 
      screenOptions={({ navigation }) => ({
          headerTitle: () => <StyledTitle navigation={navigation} />,
          headerTitleAlign: 'center',
          headerRight: () => <HamburgerMenu />,
          headerLeft: () => (
           <NavigationMenuButton />
          ),
          headerBackVisible: false,
          animationEnabled: false,
          transitionSpec: false,
        })}
        >
          
       <Stack.Screen name="Dashboard" options={{ title: 'My Day'}}/>
         {/*To implement the names for each page in a centralized way use
        <Stack.Screen name="index" options={{ title: 'Home'}}/>*/}
        
     </Stack>
     </PieMenuProvider>
  )
}

export default StackLayouts