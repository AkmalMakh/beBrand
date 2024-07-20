import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {auth, firestore} from '../firebase/firebaseConfig';
import {useTranslation} from 'react-i18next';
import {ColorGrid} from './shared/ColorSection';

const ProfileScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the current authenticated user
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userId = currentUser.uid;

          // Fetch the user document from Firestore using the authenticated user's ID
          const userDoc = await firestore.collection('Users').doc(userId).get();
          const userColor = await firestore
            .collection('ColorPlates')
            .doc(userId)
            .get();

          if (userColor.exists) {
            setColors(userColor.data().colors);
          }
          if (userDoc.exists) {
            setUserData(userDoc.data());
            console.log(userData)
          }
        } else {
          console.log('No authenticated user found!');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  const {fullName, colorPassportNumber, profileImage, country} = userData;
  // Manually define screen width
  const screenWidth = 375; // Replace with your screen width
  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        <Text style={[styles.mainHeader]}>{t('color passport')}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{marginLeft: 10}}>
          <Image
            source={require('../../assets/images/sett.png')}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, {width: screenWidth}]}
        showsVerticalScrollIndicator={true}>
        <View style={styles.containerAv}>
          {profileImage != null ? (
            <Image source={{uri: profileImage}} style={styles.avatar} />
          ) : (
            <Image
              source={require('../../assets/images/akmal.png')}
              style={styles.avatar}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.header}>{fullName}</Text>
            <Text style={styles.subHeader}>
              {t('country')}: {country}
            </Text>
            <Text style={styles.subHeader}>
              {t('passport number')}: {colorPassportNumber}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonSecondary,
            {
              paddingHorizontal: 90,
              paddingVertical: 10,
              marginBottom: 15,
              marginTop: 10,
            },
          ]}
          onPress={() => navigation.navigate('Details')}>
          <Text style={[styles.buttonTextSecondary, {textAlign: 'center'}]}>
            {t('learn more')}
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={[styles.header]}>{t('color plate')}</Text>
        </View>
        <ColorGrid colors={colors} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
