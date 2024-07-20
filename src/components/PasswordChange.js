import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from '../styles/styles';
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
      <Text style={styles.title}>{t('change password')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('current password')}
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder={t('new password')}
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={onChangePasswordPress}>
        <Text style={styles.buttonTextPrimary}>{t('submit')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;
