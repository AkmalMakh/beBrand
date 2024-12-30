import React, {useEffect, useState, useCallback} from 'react';
import styles from '../styles/profile';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {auth, firestore} from '../firebase/firebaseConfig';
import {useTranslation} from 'react-i18next';
import {ColorGrid} from './shared/ColorSection';
import DropDown from './shared/DropDown';

const ProfileScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [colors, setColors] = useState([]);

  // Fetch user data
  const fetchUserData = useCallback(async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userId = currentUser.uid;

        const userDoc = await firestore.collection('Users').doc(userId).get();
        const userColor = await firestore
          .collection('ColorData')
          .doc(userId)
          .get();

        if (userColor.exists && userColor.data()) {
          const combinedColors = [
            ...(userColor.data().bonusColors || []),
            ...(userColor.data().depthLevelColors || []),
            ...(userColor.data().mutedColors || []),
            ...(userColor.data().saturationColors || []),
            ...(userColor.data().temperatureColors || []),
          ];
          setColors(combinedColors);
        }

        if (userDoc.exists) {
          setUserData(userDoc.data());
          console.log(userData);
        }
      } else {
        console.log('No authenticated user found!');
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUserData();
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const {fullName, colorPassportNumber, profileImage, country} = userData;

  return (
    <View style={styles.container}>
      <DropDown title={t('color passport')} isHiddenArrow={true} />
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, {width: 375}]}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.containerAv}>
          {profileImage != null ? (
            <Image source={{uri: profileImage}} style={styles.avatar} />
          ) : (
            <Image
              source={require('../../assets/images/photo.png')}
              style={styles.avatar}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.subHeader}>
              {t('Full Name')}: {fullName}
            </Text>
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
          <Text
            style={[
              styles.buttonTextSecondary,
              {textAlign: 'center', color: 'white', fontSize: 16},
            ]}>
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
