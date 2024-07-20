import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button, ActivityIndicator } from 'react-native';
import {firestore} from '../firebase/firebaseConfig';
import {useNavigation} from '@react-navigation/native';

const ColorPage = ({ route }) => {
  const navigation = useNavigation();
  const { color, userData, header, colIndex} = route.params;

  // State to hold the hex value
  const [hexValue, setHexValue] = useState(color);
  const [colorsDb, setColorsDb] = useState(null);
  const [loading, setLoading] = useState(true);
  const colorMap = {
    'TEMPERATURE': 'temperatureColors',
    'COLOR SATURATION': 'saturationColors',
    'BONUS COLORS': 'bonusColors',
    'COLOR DEPTH LEVEL': 'depthLevelColors',
    'LEADING CHARACTERISTICS': 'mutedColors'
  };
  const newColor = {
      colorType: colorMap[header],
      oldHex: color,
      newHex: hexValue
  }
  
  if (userData == undefined) {
    return (
      <View style={[styles.container, { backgroundColor: hexValue }]} />
    );
  }

const saveHex = async () => {
    updateColor(newColor.colorType, newColor.newHex, newColor.oldHex)
    const user = userData
    navigation.navigate('ProfileEdit', {user})
};
const updateColor = async (colorType, newHex, oldHex) => {
  try {
    const userId = userData.uid;
    const docRef = firestore.collection('ColorData').doc(userId);
    const docData = await docRef.get();

    if (docData.exists) {
      const data = docData.data();

      const colorsArray = data[colorType];
      if (colorsArray) {
        colorsArray[colIndex] = newHex
    
        // Update Firestore with new color data
        await docRef.set(data);
        // Update local state with new color data
        setColorsDb(data);
      }
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error updating color: ', error);
  }
};

  return (
    <View style={styles.container}>
      {/* Top half with the background color */}
      <View style={[styles.topHalf, { backgroundColor: hexValue }]} />
      
      {/* Bottom half with TextInput */}
      <View style={styles.bottomHalf}>
        <Text style={styles.hexText}>HEX {hexValue.toUpperCase()}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Hex Color"
          value={hexValue}
          onChangeText={text => setHexValue(text)}
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button
            title="SAVE"
            onPress={() => saveHex()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default ColorPage;
