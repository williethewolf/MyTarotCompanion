import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Link } from 'expo-router';
import { isTablet, scaleSize } from '../utils/ResponsiveSizes'

const HamburgerDrawer = ({ isOpen, onClose }) => {
    const drawerHeight = useRef(new Animated.Value(0)).current; // Starting height
    const [isRendered, setIsRendered] = useState(isOpen);


    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        }

        Animated.timing(drawerHeight, {
            toValue: isOpen ? scaleSize(180) : 0,
            duration: 300,
            useNativeDriver: false,
            easing: Easing.inOut(Easing.ease),
        }).start(() => {
            if (!isOpen) {
                setIsRendered(false); // Set to not rendered after the animation is complete
            }
        });
    }, [isOpen, drawerHeight]);

    const animatedStyle = {
        height: drawerHeight,
        opacity: drawerHeight.interpolate({
            inputRange: [0, scaleSize(140)],
            outputRange: [0, 1],
        }),
    };

    if (!isRendered) return null;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
    {/* Drawer Content */}
    <View style={styles.textContainer}>
        <Text style={styles.text}>User Profile</Text>
        <Text style={styles.text}>Help</Text>
        <Text style={styles.text}>About</Text>
        <Text style={styles.text}>Legal</Text>
    </View>

    <View style={[styles.textContainer,{alignItems: 'flex-end', marginTop:scaleSize(20), textAlign: 'right'}]}>
        <Text style={styles.text}>Log Out</Text>
    </View>
</Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0, // Align to right
        top: scaleSize(53.5),
        backgroundColor: 'white',
        padding: scaleSize(10),
        paddingHorizontal: scaleSize(20),
        zIndex: 1000,
        overflow: 'hidden', // To hide content when drawer is closed
        elevation:2
    },
    textContainer: {
        alignItems: 'flex-start',
        //gap:7 
    },
    text: {
        textAlign: 'left',
        margin: scaleSize(5)
    },
});

export default HamburgerDrawer;