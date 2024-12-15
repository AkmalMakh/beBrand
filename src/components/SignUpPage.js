import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/signUp';
import firebase, { firestore } from '../firebase/firebaseConfig';
import { launchImageLibrary } from 'react-native-image-picker';
import { uriToBlob } from './shared/CompressImageUtil';
import DropDownBack from './shared/BackArrow';
import colorData from './shared/ColorData';
import getNextUserId from './shared/Counter';

const generateUserId = async () => {
  const newUserId = await getNextUserId();
  console.log('Generated User ID:', newUserId);
  return newUserId;
};

const SignUpPage = () => {
  const navigation = useNavigation();
  const [fullName, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [role, setRole] = useState('user');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      setRole('user');
      const firebaseProfileUrl = await saveImageToStorage(userId);
      const num = await generateUserId();

      const userData = {
        uid: userId,
        fullName,
        age,
        sex,
        country,
        colorPassportNumber: num,
        email,
        profileImage: firebaseProfileUrl,
        role,
      };

      await firestore.collection('Users').doc(userId).set(userData);
      await firestore.collection('ColorData').doc(userId).set(colorData);

      navigation.navigate('Profile');
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const saveImageToStorage = async (userId) => {
    const uploadUri =
      Platform.OS === 'ios' ? profileImage.replace('file://', '') : profileImage;

    if (!uploadUri) {
      console.error('Upload URI is null or undefined');
      return;
    }

    const fileName = `profileImages/${userId}.jpg`;
    const reference = firebase.storage().ref(fileName);

    try {
      const blob = await uriToBlob(uploadUri);
      await reference.put(blob);
      return await reference.getDownloadURL();
    } catch (error) {
      console.error('Image upload error:', error);
      throw error;
    }
  };

  const openImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
      quality: 1,
    };
    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const compressedImageUri = response.assets[0].uri;
        setProfileImage(compressedImageUri);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <DropDownBack />
          <Text style={styles.title}>Create your account</Text>
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={openImagePicker}
          >
            <Image
              source={
                profileImage
                  ? { uri: profileImage }
                  : require('../../assets/images/photo.png')
              }
              style={styles.avatar}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#bdb7b7"
            onChangeText={setFullname}
            value={fullName}
          />
          <View style={styles.inlineInputContainer}>
            <TextInput
              style={[
                { marginLeft: 36, marginRight: 5 },
                styles.input,
                styles.inlineInput,
              ]}
              placeholder="Age"
              placeholderTextColor="#bdb7b7"
              onChangeText={setAge}
              value={age}
            />
            <TextInput
              style={[{ marginRight: 5 }, styles.input, styles.inlineInput]}
              placeholder="Sex"
              placeholderTextColor="#bdb7b7"
              onChangeText={setSex}
              value={sex}
            />
            <TextInput
              style={[{ marginRight: 35 }, styles.input, styles.inlineInput]}
              placeholder="Country"
              placeholderTextColor="#bdb7b7"
              onChangeText={setCountry}
              value={country}
            />
          </View>
          <View style={styles.textContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="jane@example.com"
            placeholderTextColor="#bdb7b7"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
          />
          <View style={styles.textContainer}>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#bdb7b7"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#bdb7b7"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleSignup}>
            <Text style={styles.buttonTextPrimary}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpPage;
