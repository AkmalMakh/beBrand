import React, { useState } from 'react';
import styles from '../styles/styles';
import { View, Text,Button, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInPage = () => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in logic here
    
    //[TODO] temp data 
    fullName = 'Akmal Makhmudov'
    country = 'Uzbekistan'
    image = '../../assets/images/iconAvatar.png'
    // After successful registration, navigate to Profile Screen
    navigation.navigate('Profile', { fullName, country, avatar: image });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button
        title="Forgot Password ?"
        onPress={handleSignIn}
        color="blue" // Set button color to black
      />
       <TouchableOpacity style={styles.buttonPrimary} onPress={handleSignIn}>
          <Text style={styles.buttonTextPrimary}>Sign In</Text>
        </TouchableOpacity>
    </View>
  );
};


export default SignInPage;
