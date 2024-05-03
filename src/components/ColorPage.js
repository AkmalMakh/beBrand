import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorPage = ({ route }) => {
  const { color } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: color }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ColorPage;