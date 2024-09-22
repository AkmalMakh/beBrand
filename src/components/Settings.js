import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/setting';
import firebase from '../firebase/firebaseConfig';
import { useTranslation } from 'react-i18next';
import DropDown from './shared/DropDown';

const SettingsPage = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    await i18n.changeLanguage(newLanguage);
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Welcome');
    } catch (error) {
      console.log(error);
    }
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

      <TouchableOpacity
        onPress={() => navigation.navigate('PasswordChange')}
        style={styles.button}
      >
        <Image
            source={require('../../assets/images/lockers.png')}
            style={styles.settingsIcon}
          />
        <Text style={styles.buttonText}>{t('change password')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleLanguage}
        style={styles.button}
      >
          <Image
            source={require('../../assets/images/language.png')}
            style={styles.settingsIcon}
          />
        <Text style={styles.buttonText}>{t('change language')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        style={styles.button}
      >
          <Image
            source={require('../../assets/images/locate.png')}
            style={styles.settingsIcon}
          />
        <Text style={styles.buttonText}>{t('log out')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsPage;
