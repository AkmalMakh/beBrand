import React from 'react';
import styles from '../styles/styles';
import {View, TouchableOpacity, Text} from 'react-native';
import CustomButton from './shared/CostomButton';
import firebase from '../firebase/firebaseConfig';
import { useTranslation } from 'react-i18next';

const SettingsPage = ({navigation}) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    await i18n.changeLanguage(newLanguage);
  };

  const handleLogoout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Welcome');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => navigation.navigate('HowToUse')}
        buttonStyle={{width: 250, paddingVertical: 10, marginBottom: 15}}
        textStyle={{textAlign: 'center'}}
        text={t('how to use')}
      />
      <CustomButton
        onPress={() => navigation.navigate('AboutColor')}
        buttonStyle={{width: 250, paddingVertical: 10, marginBottom: 15}}
        textStyle={{textAlign: 'center'}}
        text={t('color typing method')}
      />
      <CustomButton
        onPress={() => navigation.navigate('AboutAuthor')}
        buttonStyle={{width: 250, paddingVertical: 10, marginBottom: 15}}
        textStyle={{textAlign: 'center'}}
        text={t('about the author')}
      />
      <CustomButton
        onPress={() => navigation.navigate('PasswordChange')}
        buttonStyle={{width: 250, paddingVertical: 10, marginBottom: 15}}
        textStyle={{textAlign: 'center'}}
        text={t('change password')}
      />
      <CustomButton
        onPress={toggleLanguage}
        buttonStyle={{width: 250, paddingVertical: 10, marginBottom: 15}}
        textStyle={{textAlign: 'center'}}
        title={i18n.language === 'en' ? t('switch_to_russian') : t('switch_to_english')}
        text={t('change_language')}
      />
      <CustomButton
        onPress={handleLogoout}
        buttonStyle={{width: 250, paddingVertical: 10, marginBottom: 15}} 
        textStyle={{textAlign: 'center'}}
        text={t('log out')}
      />
    </View>
  );
};

export default SettingsPage;
