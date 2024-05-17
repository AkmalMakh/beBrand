import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, Platform } from 'react-native';
import styles from '../styles/styles';
import firebase, { firestore, storage } from '../firebase/firebaseConfig';

const SignUpPage = () => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook
  const [fullName, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  
  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setIsLoading(true); // Show loading indicator

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert('Signup successful!');
      // Navigate to main app screen or handle success
      navigation.navigate('Profile', { fullName, country });
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <TouchableOpacity style={styles.avatarContainer}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../../assets/images/iconAvatar.png')}
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
          style={[{ marginLeft: 36, marginRight: 5 }, styles.input, styles.inlineInput]}
          placeholder="Age"
          onChangeText={text => setAge(text)}
          value={age}
        />
        <TextInput
          style={[{ marginRight: 5 }, styles.input, styles.inlineInput]}
          placeholder="Sex"
          onChangeText={text => setSex(text)}
          value={sex}
        />
        <TextInput
          style={[{ marginRight: 35 }, styles.input, styles.inlineInput]}
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
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
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

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleSignup}>
        <Text style={styles.buttonTextPrimary}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;
