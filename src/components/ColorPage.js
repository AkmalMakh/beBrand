import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { firestore } from '../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import DropDownBack from '../components/shared/BackArrow';
import Colors from './shared/Colors';

const ColorPage = ({ route }) => {
  const navigation = useNavigation();
  const { color, userData, header, colIndex } = route.params;

  // State variables
  const [colorsDb, setColorsDb] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputId, setInputId] = useState('');
  const [colorName, setColorName] = useState('');
  const [hexValue, setHexValue] = useState(color.hex);
  const [colorData, setColorData] = useState({ hex: '', englishName: '' });

  // Mapping headers to Firestore collections
  const colorMap = {
    'TEMPERATURE': 'temperatureColors',
    'COLOR SATURATION': 'saturationColors',
    'BONUS COLORS': 'bonusColors',
    'COLOR DEPTH LEVEL': 'depthLevelColors',
    'LEADING CHARACTERISTICS': 'mutedColors',
  };

  const newColor = {
    colorType: colorMap[header],
    oldHex: color.hex,
    newHex: color,
  };

  // Handle case when userData is undefined
  if (!userData) {
    return (
      <View style={[styles.container, { backgroundColor: hexValue }]}>
        <DropDownBack />
      </View>
    );
  }

  // Function to retrieve color details by ID
  const getColorById = () => {
    setLoading(true);
    const selectedColor = Colors.find(
      (item) => item.id === parseInt(inputId, 10)
    );
    if (selectedColor) {
      console.log("AKI", selectedColor)
      
      setColorData(selectedColor);
      setHexValue(selectedColor.hex);
      setColorName(selectedColor.name);
      newColor.newHex = selectedColor;
    }
    setLoading(false);
  };

  // Function to save updated color to Firestore
  const saveHex = async () => {
    try {
      await updateColor(newColor.colorType);
      navigation.navigate('ProfileEdit', { user: userData });
    } catch (error) {
      console.error('Error saving color:', error);
    }
  };

  // Function to update the color in Firestore
  const updateColor = async (colorType) => {
    try {
      const userId = userData.uid;
      const docRef = firestore.collection('ColorData').doc(userId);
      const docData = await docRef.get();

      if (docData.exists) {
        const data = docData.data();
        const colorsArray = data[colorType];

        if (colorsArray) {
          const colorIndex = colorsArray.findIndex(
            (item) => item.hex === color.hex
          );
          if (colorIndex !== -1 && colorData.hex !== '' && colorData.name !== '') {
            colorsArray[colorIndex] = colorData;
            data[colorType] = colorsArray;
            await docRef.set(data);
            setColorsDb(data);
          }
        }
      }
    } catch (error) {
      console.error('Error updating color:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <DropDownBack />
          <View style={[styles.topHalf, { backgroundColor: hexValue }]} />
          <View style={styles.bottomHalf}>
            <Text style={styles.hexText}>HEX {hexValue.toUpperCase()}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter ID"
              keyboardType="numeric"
              value={inputId}
              onChangeText={setInputId}
            />
            <Button title="Get Color" onPress={getColorById} />
            {loading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Text style={styles.colorName}>{colorName}</Text>
            )}
            <View style={styles.buttonContainer}>
              <Button title="Save" onPress={saveHex} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    marginTop: 10,
  },
  colorName: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ColorPage;
