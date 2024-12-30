import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/signUp';
import firebase, {firestore} from '../firebase/firebaseConfig';
import {launchImageLibrary} from 'react-native-image-picker';
import {uriToBlob} from './shared/CompressImageUtil';
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
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      setError('Email and password are required.');
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    // Validate password length and complexity
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be 8+ characters with uppercase, lowercase, number, and special character.',
      );
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    setError('');
    setIsLoading(true);
    try {
      // Create user in Firebase
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
  
      // Send email verification
      await userCredential.user.sendEmailVerification();
      alert(
        'A verification email has been sent to your email address. Please verify it before logging in.',
      );
  
      // Use placeholder image if no profile image is provided
      const firebaseProfileUrl = profileImage
        ? await saveImageToStorage(userId)
        : '';
  
      // Generate a new user ID
      const num = await generateUserId();
  
      // User data to save in Firestore
      const userData = {
        uid: userId,
        fullName: fullName || 'Anonymous',
        age: age || 'Not specified',
        sex: sex || 'Not specified',
        country: country || 'Not specified',
        colorPassportNumber: num,
        email,
        profileImage: firebaseProfileUrl,
        role,
        emailVerified: false, // Add this field to track verification status
      };
  
      // Save user data in Firestore
      await firestore.collection('Users').doc(userId).set(userData);
      await firestore.collection('ColorData').doc(userId).set(colorData);
  
      // Navigate to a screen showing a message to verify their email
      navigation.navigate('VerifyEmail');
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const saveImageToStorage = async (userId) => {
    if (!profileImage) {
      console.log('No profile image provided. Skipping upload.');
      return '';
    }
  
    // Normalize file URI for different platforms
    const uploadUri =
      Platform.OS === 'ios'
        ? profileImage.replace('file://', '')
        : profileImage;
  
    // Define the storage path for the profile image
    const fileName = `profileImages/${userId}.jpg`;
    const reference = firebase.storage().ref(fileName);
  
    console.log('Firebase storage reference created:', reference.fullPath);
  
    try {
      // Convert the file URI to a Blob
      const blob = await uriToBlob(uploadUri);
      console.log('Blob created successfully:', blob);
  
      // Upload the blob to Firebase Storage
      console.log('Starting upload to Firebase Storage...');
      await reference.put(blob);
  
      // Retrieve the download URL for the uploaded image
      const downloadUrl = await reference.getDownloadURL();
      console.log('File uploaded successfully. Download URL:', downloadUrl);
  
      return downloadUrl;
    } catch (error) {
      console.error('Image upload error:', error.code, error.message);
  
      // Provide a user-friendly error message
      let errorMessage = 'An error occurred during image upload.';
      if (error.code === 'storage/unauthorized') {
        errorMessage = 'You do not have permission to upload this file.';
      } else if (error.code === 'storage/quota-exceeded') {
        errorMessage = 'Storage quota exceeded. Please contact support.';
      } else if (error.code === 'storage/retry-limit-exceeded') {
        errorMessage = 'Upload retries exceeded. Check your connection and try again.';
      }
  
      throw new Error(errorMessage);
    }
  };
  
  // Helper function to convert URI to Blob
  const uriToBlob = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log('Blob fetched from URI:', blob);
    return blob;
  };
  

  const openImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
      quality: 1,
    };
    launchImageLibrary(options, async response => {
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <DropDownBack />
          <Text style={styles.title}>Create your account</Text>
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={openImagePicker}>
            <Image
              source={
                profileImage
                  ? {uri: profileImage}
                  : require('../../assets/images/photo.png')
              }
              style={styles.avatar}
            />
          </TouchableOpacity>
          {error ? (
            <Text
              style={[
                styles.errorText,
                {padding: 10, fontSize: 16, color: 'red'},
              ]}>
              {error}
            </Text>
          ) : null}
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
                {marginLeft: 36, marginRight: 5},
                styles.input,
                styles.inlineInput,
              ]}
              placeholder="Age"
              placeholderTextColor="#bdb7b7"
              onChangeText={setAge}
              value={age}
            />
            <TextInput
              style={[{marginRight: 5}, styles.input, styles.inlineInput]}
              placeholder="Sex"
              placeholderTextColor="#bdb7b7"
              onChangeText={setSex}
              value={sex}
            />
            <TextInput
              style={[{marginRight: 35}, styles.input, styles.inlineInput]}
              placeholder="Country"
              placeholderTextColor="#bdb7b7"
              onChangeText={setCountry}
              value={country}
            />
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
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleSignup}
            disabled={isLoading}>
            <Text style={styles.buttonTextPrimary}>
              {isLoading ? 'Signing up...' : 'Submit'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpPage;
