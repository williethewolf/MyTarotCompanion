import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import stars from '../assets/backgrounds/starsbg.png';

const TwinklingBackground = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // For twinkling stars
    const bgColorAnim = useRef(new Animated.Value(1)).current; // For solid background opacity
    const pulseAnim = useRef(new Animated.Value(0.2)).current; // Initial opacity for pulsing stars

    useEffect(() => {
      // Solid background opacity animation
      Animated.timing(bgColorAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        // Twinkling stars animation
        const twinklingAnimation = Animated.loop(
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 0.2,
              duration: 3000,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 3000,
              useNativeDriver: true,
            }),
          ])
        );
        twinklingAnimation.start();

        // Pulsing stars animation
        const pulsingAnimation = Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 0.6,
              duration: 4000,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 0.2,
              duration: 4000,
              useNativeDriver: true,
            }),
          ])
        );
        pulsingAnimation.start();
      });

      return () => {
        fadeAnim.stopAnimation();
        bgColorAnim.stopAnimation();
        pulseAnim.stopAnimation();
      };
    }, []);

    return (
      <View style={StyleSheet.absoluteFill}>
        <LinearGradient
          colors={['#304766', '#0c131c']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        >
          <View style={StyleSheet.absoluteFill}>
            <Animated.Image
              source={stars}
              style={[
                StyleSheet.absoluteFillObject,
                { opacity: pulseAnim }, // Apply the animated opacity value for pulsing
              ]}
            />
            <Animated.Image
              source={stars}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity: fadeAnim,
                  transform: [{ rotate: '180deg' }],
                },
              ]}
            />
          </View>
        </LinearGradient>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: '#0c131c', opacity: bgColorAnim },
          ]}
        />
      </View>
    );
};

export default TwinklingBackground;