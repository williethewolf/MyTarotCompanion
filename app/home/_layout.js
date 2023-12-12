import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HamburgerMenu from '../../components/HamburgerMenu'
import StyledTitle from '../../components/StyledTitle'
import styles from '../../styles'

const StackLayouts = () => {
  return (
    
    <Stack 
      screenOptions={({ navigation }) => ({
          headerTitle: () => <StyledTitle navigation={navigation} />,
          headerTitleAlign: 'center',
          headerRight: () => <HamburgerMenu />,
          headerLeft: () => (
            <TouchableOpacity style={styles.roundButton}>
              <Text style={styles.rightMenuButton}>⚿</Text>
            </TouchableOpacity>
          ),
        })}
        />
    //     {/*To implement the names for each page in a centralized way use
    //     <Stack.Screen name="index" options={{ title: 'Home'}}/>*/}
    // </Stack>
  )
}

export default StackLayouts