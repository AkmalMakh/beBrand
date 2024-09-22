import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/profile';

const DropDown = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.dropDown}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
        <Image
          source={require('../../../assets/images/arrow2.png')}
          style={styles.settingsIcoArrow}
        />
      </TouchableOpacity>
      <Text style={[styles.mainHeader]}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginRight: 10 }}>
        <Image
          source={require('../../../assets/images/settings.png')}
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DropDown;