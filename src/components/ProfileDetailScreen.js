import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/styles';
import ColorSection from './shared/ColorSection';
import {auth, firestore} from '../firebase/firebaseConfig'; 
import { useTranslation } from 'react-i18next';

const ProfileDetailScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation(); 
  const screenWidth = Dimensions.get('window').width;
  const [colorsDb, setColorsDb] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const fetchColors = async () => {
    try {
        const userId = auth.currentUser.uid;
        const docData = await firestore.collection('ColorData').doc(userId).get();
        if (docData.exists) {
          setColorsDb(docData.data())
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchColors();
  }, []);
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, {width: screenWidth}]}
        showsVerticalScrollIndicator={true}>
        <ColorSection
          header={t('leading characteristics')}
          subHeader={t('muted')}
          description={t('leading info')}
          colors={colorsDb.mutedColors}
          navigation={navigation}
        />

        {/* [TO DO] make sure to move it to component  */}
        <Text style={[styles.header2]}>{t('color depth level')}</Text>
        <Text style={[styles.header4]}>
        {t('color depth info')}
        </Text>
        <View style={styles.row}>
          {Array.from(Array(5).keys()).map(index => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('ColorPage', {color: colorsDb.depthLevelColors[index]})
              }>
              <View
                style={[
                  styles.box,
                  {
                    borderRadius: 10,
                    height: 50,
                    width: 50,
                    backgroundColor: colorsDb.depthLevelColors[index],
                  },
                ]}>
                <Text style={[styles.hexText, {fontSize: 11}]}>
                  {colorsDb.depthLevelColors[index]}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

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
        <Text style={[styles.header2]}>*{t('bonus colors')}</Text>
        <Text style={[styles.header4]}>
        {t('color bonus info')}.{' '}
        </Text>
        <TouchableOpacity
          key={1}
          onPress={() => navigation.navigate('ColorPage', {color: colorsDb.bonusColors[1]})}>
          <View
            style={[
              styles.box,
              {
                borderRadius: 10,
                height: 50,
                width: 50,
                backgroundColor: colorsDb.bonusColors[1],
              },
            ]}>
            <Text style={[styles.hexText, {fontSize: 11}]}>{colorsDb.bonusColors[1]}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileDetailScreen;
