// src/screens/Splash.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Replace 'Login' with the actual route name for your login screen
    }, 5000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('../assets/images/Splash.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Updated background color to match Figma
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: screenWidth * 0.75, // 75% of screen width
    height: screenHeight * 0.15, // 15% of screen height
    resizeMode: 'contain', // Ensure the logo scales proportionally
    position: 'absolute',
    top: screenHeight * 0.44, // Position according to Figma design
  },
});

export default Splash;
