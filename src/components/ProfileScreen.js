import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';



const ProfileScreen = ({ route }) => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook  
  const {fullName, country, avatar } = route.params;
  // Define colors for the boxes
  const colors = [
        '#824A4A', '#D18787', '#7EB26C', '#B94747', '#FF00FF', '#00FFFF', '#FFA500',
        '#FF1493', '#800080', '#00FA9A', '#D18787', '#FF9595', '#FFC0CB', '#8A2BE2',
        '#FF6347', '#00CED1', '#7FFFD4', '#000080', '#F08080', '#7FFF00', '#A52A2A',
        '#008080', '#DAA520', '#20B2AA', '#B0C4DE', '#BC8F8F', '#6495ED', '#FF4500',
        '#2E8B57', '#FFD700', '#8B4513', '#00BFFF', '#4169E1', 
      ];
  // Manually define screen width
  const screenWidth = 375; // Replace with your screen width
  return (
    <View style={styles.container}>
        
  <View style={styles.dropDown}>
  <Text style={[styles.mainHeader]}>Color Passport</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginLeft: 10 }}>
    <Image source={require('../../assets/images/sett.png')} style={styles.settingsIcon} />
  </TouchableOpacity>
</View>
      <ScrollView
       contentContainerStyle={[styles.scrollViewContent, { width: screenWidth }]}
        showsVerticalScrollIndicator={true}
      >
    <View style={styles.containerAv}>
      <Image source={require('../../assets/images/akmal.png')} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{fullName}</Text>
        <Text style={styles.subHeader}>Country: {country}</Text>
        <Text style={styles.subHeader}>Passport Number: 00000</Text>
      </View>
    </View>
              
        <TouchableOpacity style={[styles.buttonSecondary, {paddingHorizontal: 90, paddingVertical: 10,  marginBottom: 15}]} 
                        onPress={() => navigation.navigate('Details')}>
            <Text style={[styles.buttonTextSecondary, {textAlign: 'center',}]}>LEARN MORE</Text>
        </TouchableOpacity>
        <View>
            <Text style={[styles.header]}>COLOR PLATE</Text>
        </View>
         <View style={styles.gridContainer}>
          {Array.from(Array(11).keys()).map((row) => (
            <View key={row} style={styles.row}>
              {Array.from(Array(3).keys()).map((col) => (
                <TouchableOpacity
                  key={`${row}-${col}`}
                  onPress={() => navigation.navigate('ColorPage', { color: colors[row * 3 + col] })}
                >
                  <View style={[styles.box, { backgroundColor: colors[row * 3 + col] }]}>
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
