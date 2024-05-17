import React from 'react';
import styles from '../styles/styles';
import { View, TouchableOpacity, Text } from 'react-native';
import CustomButton from './shared/CostomButton';
import firebase from '../firebase/firebaseConfig';

const SettingsPage = ({ navigation }) => {
  const handleLogoout = async () => {
    try{
        await firebase.auth().signOut();
        navigation.navigate('Welcome')
    }catch (error) {
        console.log(error)
    }
  };  
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => navigation.navigate('HowToUse')}
        buttonStyle={{ width: 250, paddingVertical: 10, marginBottom: 15 }} // Adjust width as needed
        textStyle={{ textAlign: 'center' }}
        text="HOW TO USE"
      />
      <CustomButton
        onPress={() => navigation.navigate('AboutColor')}
        buttonStyle={{ width: 250, paddingVertical: 10, marginBottom: 15 }} // Adjust width as needed
        textStyle={{ textAlign: 'center' }}
        text="COLOR TYPING METHOD"
      />
      <CustomButton
        onPress={() => navigation.navigate('AboutAuthor')}
        buttonStyle={{ width: 250, paddingVertical: 10, marginBottom: 15 }} // Adjust width as needed
        textStyle={{ textAlign: 'center' }}
        text="ABOUT THE AUTHOR"
      />
      <CustomButton
        onPress={() => navigation.navigate('Details')}
        buttonStyle={{ width: 250, paddingVertical: 10, marginBottom: 15 }} // Adjust width as needed
        textStyle={{ textAlign: 'center' }}
        text="CHANGE PASSWORD"
      />
      <CustomButton
        onPress={() => navigation.navigate('Details')}
        buttonStyle={{ width: 250, paddingVertical: 10, marginBottom: 15 }} // Adjust width as needed
        textStyle={{ textAlign: 'center' }}
        text="CHANGE LANGUAGE"
      />
      <CustomButton
        onPress={handleLogoout}
        buttonStyle={{ width: 250, paddingVertical: 10, marginBottom: 15 }} // Adjust width as needed
        textStyle={{ textAlign: 'center' }}
        text="LOG OUT"
      />
    </View>
  );
};


export default SettingsPage;
