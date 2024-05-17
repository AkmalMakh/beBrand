import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const AboutColorTyping= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Color Typing Method</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo nec odio blandit
        efficitur. Nullam sit amet libero nec dolor viverra congue.
      </Text>
    </View>
  );
};

export default AboutColorTyping;
