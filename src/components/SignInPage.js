import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase, { firestore } from '../firebase/firebaseConfig';
import DropDownBack from './shared/BackArrow';
import styles from '../styles/signIn';

const SignInPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const forgotPassword = async () => {
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    try {
      setIsDisabled(true);
      await firebase.auth().sendPasswordResetEmail(email);
      setErrorMessage('A password reset email has been sent to your email address.');
    } catch (error) {
      console.error('Forgot Password Error:', error); // Log for debugging
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email address.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('The email address is not valid.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
  
    setIsLoading(true);
    setErrorMessage('');
  
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      const userId = user.uid;
      const userData = await firestore.collection('Users').doc(userId).get();
      const userRole = userData.data().role;
      
      if (!user.emailVerified && !userRole === 'admin') {
        setErrorMessage('Your email is not verified. Please verify your email before signing in.');
        return;
      }
      if (userRole === 'admin') {
        navigation.navigate('ProfileAdmin');
      } else {
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error('Sign-In Error:', error); // Log for debugging
      switch (error.code) {
        case 'auth/invalid-credential':
          setErrorMessage('Invalid credentials. Please try again.');
          break;
        case 'auth/user-not-found':
          setErrorMessage('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setErrorMessage('Incorrect password. Please try again.');
          break;
        default:
          setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <DropDownBack />
          <Text style={styles.title}>LOG IN</Text>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text> // Display friendly error messages
          ) : null}
          <View style={styles.textContainer}>
            <Text style={styles.text}>E-mail</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="jane@example.com"
            placeholderTextColor="#bdb7b7"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#bdb7b7"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Button
            title="Forgot Password?"
            onPress={forgotPassword}
            color="blue"
          />
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleSignIn}
            disabled={isLoading} // Disable button during loading
          >
            <Text style={styles.buttonTextPrimary}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInPage;
