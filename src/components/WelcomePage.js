import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonTextSecondary}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonTextPrimary}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Welocme To Be Brand</Text>
      {/* <Image source={require('./logo.png')} style={styles.logo} /> */}
    </View>
  );
};


export default WelcomePage;
