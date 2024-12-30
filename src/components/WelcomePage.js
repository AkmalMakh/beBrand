import React, { useLayoutEffect } from 'react';
import styles from '../styles/welcome';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Welcome to {"\n"}<Text style={styles.brand}>BE BRAND</Text></Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonTextPrimary}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonTextSecondary}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};


export default WelcomePage;
