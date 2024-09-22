import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import styles from '../styles/signIn';
import firebase from '../firebase/firebaseConfig';
import 'firebase/auth';
import {useTranslation} from 'react-i18next';

const ChangePasswordScreen = () => {
  const {t} = useTranslation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const reauthenticate = currentPassword => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    return user.reauthenticateWithCredential(credential);
  };

  const onChangePasswordPress = () => {
    textAlert = t('changes');
    reauthenticate(currentPassword)
      .then(() => {
        const user = firebase.auth().currentUser;

        user
          .updatePassword(newPassword)
          .then(() => {
            Alert.alert(textAlert);
            navigation.navigate('Profile');
          })
          .catch(error => {
            Alert.alert(error.message);
          });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          source={require('../../assets/images/arrow2.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
          <Text style={styles.text}>{t('current password')}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={t('**********')}
        placeholderTextColor="#bdb7b7"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />
      <View style={styles.textContainer}>
          <Text style={styles.text}>{t('new password')}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={t('**********')}
        placeholderTextColor="#bdb7b7"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <View style={styles.textContainer}>
          <Text style={styles.text}>{t('confirm password')}</Text>
      </View>
       <TextInput
        style={styles.input}
        placeholder={t('**********')}
        placeholderTextColor="#bdb7b7"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonPrimary} onPress={onChangePasswordPress}>
        <Text style={styles.buttonTextPrimary}>{t('submit')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;
