import React, {useState} from 'react';
import styles from '../styles/signIn';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase, {firestore} from '../firebase/firebaseConfig';
import DropDownBack from './shared/BackArrow';

const SignInPage = () => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const forgotPassword = async () => {
    return;
  }
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
      if (userRole == 'admin') {
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
        color="blue" // Set button color to black
      />
      <TouchableOpacity style={styles.buttonPrimary} onPress={handleSignIn}>
        <Text style={styles.buttonTextPrimary}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInPage;
