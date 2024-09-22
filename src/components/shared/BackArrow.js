import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/signIn';

const DropDownBack = () => {
  const navigation = useNavigation();

  return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          source={require('../../../assets/images/arrow2.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
  );
};

export default DropDownBack;