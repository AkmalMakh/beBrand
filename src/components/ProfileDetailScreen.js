import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/styles';
import {ColorSection, ColorDepthSection} from './shared/ColorSection';
import {auth, firestore} from '../firebase/firebaseConfig';
import {useTranslation} from 'react-i18next';
import DropDown from './shared/DropDown';

const ProfileDetailScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const [colorsDb, setColorsDb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch colors data
  const fetchColors = useCallback(async () => {
    try {
      const userId = auth.currentUser.uid;
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
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);

  // Handle refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchColors();
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>      
      <DropDown title="Color Passport" isHiddenArrow={false} />
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, {width: screenWidth}]}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <ColorSection
          header={t('leading characteristics')}
          subHeader={t('Depth')}
          description={t('leading info')}
          colors={colorsDb.mutedColors}
          navigation={navigation}
        />
        <ColorDepthSection
          header={t('color depth level')}
          description={t('color depth info')}
          colors={colorsDb.depthLevelColors}
          navigation={navigation}
        />
        <ColorSection
          header={t('temperature')}
          subHeader={t('floating')}
          description={t('temperature info')}
          colors={colorsDb.temperatureColors}
          navigation={navigation}
        />
        <ColorSection
          header={t('color saturation')}
          subHeader={t('subdued')}
          description={t('color sat info')}
          colors={colorsDb.saturationColors}
          navigation={navigation}
        />
        <ColorDepthSection
          header={t('bonus colors')}
          description={t('color bonus info')}
          colors={colorsDb.bonusColors}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileDetailScreen;
