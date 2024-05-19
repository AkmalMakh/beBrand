import React, { useEffect, useState } from 'react';
import styles from '../styles/styles';
import {View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {auth, firestore} from '../firebase/firebaseConfig'; 


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const ProfileScreen = () => {
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
          const userColor = await firestore.collection('ColorPlates').doc(userId).get();

          if (userColor.exists) {
            setColors(userColor.data().colors);
          } 
          if (userDoc.exists) {
            setUserData(userDoc.data());
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
  const {fullName, colorPassportNumber, country} = userData;
  // Manually define screen width
  const screenWidth = 375; // Replace with your screen width
  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        <Text style={[styles.mainHeader]}>Color Passport</Text>
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
          <Image
            source={require('../../assets/images/akmal.png')}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.header}>{fullName}</Text>
            <Text style={styles.subHeader}>Country: {country}</Text>
            <Text style={styles.subHeader}>Passport Number: {colorPassportNumber}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonSecondary,
            {paddingHorizontal: 90, paddingVertical: 10, marginBottom: 15, marginTop: 10},
          ]}
          onPress={() => navigation.navigate('Details')}>
          <Text style={[styles.buttonTextSecondary, {textAlign: 'center'}]}>
            LEARN MORE
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={[styles.header]}>COLOR PLATE</Text>
        </View>
        <View style={styles.gridContainer}>
          {Array.from(Array(11).keys()).map(row => (
            <View key={row} style={styles.row}>
              {Array.from(Array(3).keys()).map(col => (
                <TouchableOpacity
                  key={`${row}-${col}`}
                  onPress={() =>
                    navigation.navigate('ColorPage', {
                      color: colors[row * 3 + col],
                    })
                  }>
                  <View
                    style={[
                      styles.box,
                      {backgroundColor: colors[row * 3 + col]},
                    ]}>
                    <Text style={styles.hexText}>{colors[row * 3 + col]}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
