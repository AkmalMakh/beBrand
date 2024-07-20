import React, {useState} from 'react';
import styles from '../styles/styles';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase, {firestore} from '../firebase/firebaseConfig';

const SignInPage = () => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

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
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
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
