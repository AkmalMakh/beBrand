import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

const SignUpPage = () => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook
  const [fullName, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here

    // After successful registration, navigate to Profile Screen
    navigation.navigate('Profile', { fullName, country, avatar: image });
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Create your account</Text>
    <TouchableOpacity style={styles.avatarContainer}>
      <Image
        source={require('../../assets/images/iconAvatar.png')}
        style={styles.avatar}
      />
    </TouchableOpacity>
    <TextInput
      style={styles.input}
      placeholder="Full Name"
      onChangeText={text => setFullname(text)}
      value={fullName}
    />
    <View style={styles.inlineInputContainer}>
      <TextInput
        style={[{marginLeft:36, marginRight:5}, styles.input, styles.inlineInput]}
        placeholder="Age"
        onChangeText={text => setAge(text)}
        value={age}
      />
      <TextInput
        style={[{marginRight:5}, styles.input, styles.inlineInput]}
        placeholder="Sex"
        onChangeText={text => setSex(text)}
        value={sex}
      />
      <TextInput
        style={[{marginRight:35}, styles.input, styles.inlineInput]}
        placeholder="Country"
        onChangeText={text => setCountry(text)}
        value={country}
      />
    </View>
    <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={text => setEmail(text)}
      value={email}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
      value={password}
    />
    <TextInput
      style={styles.input}
      placeholder="Confirm Password"
      secureTextEntry={true}
      onChangeText={text => setConfirmPassword(text)}
      value={confirmPassword}
    />

    <TouchableOpacity style={styles.buttonPrimary} onPress={handleRegister}>
          <Text style={styles.buttonTextPrimary}>Submit</Text>
    </TouchableOpacity>
  </View>
  );
};

export default SignUpPage;
