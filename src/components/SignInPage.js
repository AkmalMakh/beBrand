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

  const forgotPassword = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      alert('A password reset email has been sent to your email address.');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        alert('No user found with this email address.');
      } else if (error.code === 'auth/invalid-email') {
        alert('The email address is not valid.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    setIsLoading(true);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const userId = firebase.auth().currentUser.uid;
      const userData = await firestore.collection('Users').doc(userId).get();
      const userRole = userData.data().role;
      if (userRole === 'admin') {
        navigation.navigate('ProfileAdmin');
      } else {
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check email or password');
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
          <View style={styles.textContainer}>
            <Text style={styles.text}>E-mail</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="jane@example.com"
            placeholderTextColor="#bdb7b7"
            onChangeText={text => setEmail(text)}
            value={email}
            autoFocus={true}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#bdb7b7"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Button
            title="Forgot Password ?"
            onPress={forgotPassword}
            style={styles.title}
            color="blue"
          />
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleSignIn}>
            <Text style={styles.buttonTextPrimary}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInPage;