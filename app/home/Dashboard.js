import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Dashboard() {
  return (
    <View>
       
      <Text>Dashboard</Text>
      <Link href='home/Tarot'>Tarot</Link>
    </View>
  )
}

const styles = StyleSheet.create({})