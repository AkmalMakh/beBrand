import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const CustomButton = ({ onPress, buttonStyle, textStyle, text }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#F0F0F0',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
    },
  });
export default CustomButton;
