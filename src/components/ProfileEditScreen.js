import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import styles from '../styles/styles';
import { ColorSection, ColorDepthSection } from './shared/ColorSection';
import { firestore } from '../firebase/firebaseConfig';
import { useTranslation } from 'react-i18next';
import DropDown from './shared/DropDown';

const ProfileEditScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const route = useRoute(); // useRoute hook to get route params
  const { user } = route.params; // destructure user from route params
  const [colorsDb, setColorsDb] = useState(null);
  const [loading, setLoading] = useState(true);
  const userData = {
    uid: user.uid,
    role: user.role,
  };

  const holdTimeoutRef = useRef(null); // To store the timeout reference

  console.log('Aki',userData);

  const fetchColors = async () => {
    try {
      setLoading(true); // Set loading state
      const userId = user.uid;
      const docData = await firestore
        .collection('ColorData')
        .doc(userId)
        .get();
      if (docData.exists) {
        setColorsDb(docData.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
    } finally {
      setLoading(false); // Unset loading state
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchColors();
    }, [])
  );

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;

    if (y <= 0) {
      // User has scrolled to the top
      if (holdTimeoutRef.current === null) {
        holdTimeoutRef.current = setTimeout(() => {
          fetchColors();
          holdTimeoutRef.current = null; // Reset the timeout reference
        }, 1000); // 1 second hold
      }
    } else {
      // Clear the timeout if user scrolls away from the top
      if (holdTimeoutRef.current !== null) {
        clearTimeout(holdTimeoutRef.current);
        holdTimeoutRef.current = null;
      }
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DropDown title="Color Passport" isHiddenArrow={false} />
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, { width: screenWidth }]}
        showsVerticalScrollIndicator={true}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Control the frequency of the scroll event, 16ms is a good value for smooth scrolling
      >
        <ColorSection
          header={t('leading characteristics')}
          subHeader={t('Depth')}
          description={t('leading info')}
          colors={colorsDb.mutedColors}
          navigation={navigation}
          userData={userData}
        />
        <ColorDepthSection
          header={t('color depth level')}
          description={t('color depth info')}
          colors={colorsDb.depthLevelColors}
          navigation={navigation}
          userData={userData}
        />
        <ColorSection
          header={t('temperature')}
          subHeader={t('floating')}
          description={t('temperature info')}
          colors={colorsDb.temperatureColors}
          navigation={navigation}
          userData={userData}
        />
        <ColorSection
          header={t('color saturation')}
          subHeader={t('subdued')}
          description={t('color sat info')}
          colors={colorsDb.saturationColors}
          navigation={navigation}
          userData={userData}
        />
        <ColorDepthSection
          header={t('bonus colors')}
          description={t('color bonus info')}
          colors={colorsDb.bonusColors}
          navigation={navigation}
          userData={userData}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileEditScreen;
