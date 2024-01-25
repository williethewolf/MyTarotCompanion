import React, { useState, useRef } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const FlippableViewIcons = ({ frontComponent, backComponent, style, backComponentStyle  }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipAnim = useRef(new Animated.Value(0)).current;

    const flip = () => {
        setIsFlipped(!isFlipped);

        Animated.timing(flipAnim, {
            toValue: isFlipped ? 0 : 180,
            duration: 300,
            useNativeDriver: false,  // Set to false if there are issues with true
        }).start();
    };

    const frontStyle = {
        ...styles.flipCard,
        transform: [
            { rotateY: flipAnim.interpolate({
                inputRange: [0, 180],
                outputRange: ['0deg', '180deg']
            }) },
        ],
        opacity: flipAnim.interpolate({
            inputRange: [0, 90, 180],
            outputRange: [1, 0, 0]
        }),
    };

    const backStyle = {
        ...styles.flipCard,
        ...styles.flipCardBack,
        ...backComponentStyle, // Apply the custom style here
        transform: [
            { rotateY: flipAnim.interpolate({
                inputRange: [0, 180],
                outputRange: ['180deg', '360deg']
            }) },
        ],
        opacity: flipAnim.interpolate({
            inputRange: [0, 90, 180],
            outputRange: [0, 0, 1]
        }),
    };

    return (
        <TouchableOpacity onPress={flip} style={[styles.container, style]}>
            <Animated.View style={frontStyle}>
                {frontComponent}
            </Animated.View>
            <Animated.View style={backStyle}>
                {backComponent}
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flipCard: {
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        position: 'absolute',
        top: 0,
    }
});

export default FlippableViewIcons;