import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import firebase, { firestore } from '../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/adminStyle';
import DropDown from './shared/DropDown';

const ProfileAdmin = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [showAllClients, setShowAllClients] = useState(false);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    // Fetch users from Firestore
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await firestore.collection('Users').get();
        const usersData = usersSnapshot.docs.map(doc => doc.data());
        setUsers(usersData.filter(user => user.role === 'user'));
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers(); // Call fetchUsers function when component mounts
  }, []); // Empty dependency array to run effect only once

  const toggleClientsVisibility = () => {
    setShowAllClients(!showAllClients);
  };

  const viewDetails = (user) => {
    console.log(user);
    navigation.navigate('ProfileEdit', { user });
  };

  return (
    <View style={styles.container}>
      <DropDown title={'color passport'} />
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, { width: screenWidth }]}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.title}>List of new Clients</Text>
        {/* Display user data */}
        <View style={styles.rowContainer}>
          {users.slice(0, showAllClients ? users.length : 4).map((user, index) => (
            <View key={index} style={styles.profileRow}>
              <View style={styles.containerAv}>
                {user.profileImage ? (
                  <Image source={{ uri: user.profileImage }} style={styles.avatar} />
                ) : (
                  <Image
                    source={require('../../assets/images/photo.png')}
                    style={styles.avatar}
                  />
                )}
                <View style={styles.textContainer}>
                  <Text style={styles.header}>{user.fullName || 'No Name Provided'}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => viewDetails(user)}
                >
                  <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleClientsVisibility}>
          <Text style={styles.toggleButtonText}>
            {showAllClients ? 'Show Less' : 'Show More'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileAdmin;
