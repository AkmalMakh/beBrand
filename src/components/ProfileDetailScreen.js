import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';
import ColorSection from './shared/ColorSection';

const ProfileDetailScreen = () => {
  const navigation = useNavigation(); // Access navigation prop using useNavigation hook  
  const screenWidth = Dimensions.get('window').width;
  const boxWidth = (screenWidth - 40) / 5; // Subtracting 40 for margins and dividing by 5 for 5 boxes

  // Define colors for the boxes
  const colors = [
        '#824A4A', '#D18787', '#7EB26C', '#B94747', '#FF00FF', '#00FFFF', '#FFA500',
        '#FF1493', '#800080', '#00FA9A', '#D18787', '#FF9595', '#FFC0CB', '#8A2BE2',
        '#FF6347', '#00CED1', '#7FFFD4', '#000080', '#F08080', '#7FFF00', '#A52A2A',
        '#008080', '#DAA520', '#20B2AA', '#B0C4DE', '#BC8F8F', '#6495ED', '#FF4500',
        '#2E8B57', '#FFD700', '#8B4513', '#00BFFF', '#4169E1', 
      ];

  return (
    <View style={styles.container}>
      <ScrollView
       contentContainerStyle={[styles.scrollViewContent, { width: screenWidth }]}
        showsVerticalScrollIndicator={true}>  
        <ColorSection
        header="LEADING CHARACTERISTICS:"
        subHeader="MUTED"
        description="Complex, dusty colors are suitable for you"
        colors={colors}
        navigation={navigation}
      />

      {/* [TO DO] make sure to move it to component  */}
      <Text style={[styles.header2]}>COLOR DEPTH LEVEL</Text>
      <Text style={[styles.header4]}>This is what the gradation of the depth of your colors looks like:
       from lightest to darkest</Text>
       <View style={styles.row}>
        {Array.from(Array(5).keys()).map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ColorPage', { color: colors[index] })}
          >
            <View style={[styles.box, {borderRadius: 10, height:50, width: 50, backgroundColor: colors[index] }]}>
              <Text style={[styles.hexText, {fontSize: 11}]}>{colors[index]}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <ColorSection
        header="TEMPERATURE:"
        subHeader="FLOATING"
        description="The temperature doesn't matter for your appearance; both warm and cool colors suit you"
        colors={colors}
        navigation={navigation}
      />
      <ColorSection
        header="COLOR SATURATION:"
        subHeader="SUBDUED"
        description="Low color intensity is important for your appearance"
        colors={colors}
        navigation={navigation}
      />
      <Text style={[styles.header2]}>BONUS COLORS:</Text>
      <Text style={[styles.header4]}>Colors that do not meet the criteria of the color passport but can be presented in your portrain zone. </Text>
      <TouchableOpacity
            key={1}
            onPress={() => navigation.navigate('ColorPage', { color: colors[1] })}
          >
            <View style={[styles.box, {borderRadius: 10, height:50, width: 50, backgroundColor: colors[1] }]}>
              <Text style={[styles.hexText, {fontSize: 11}]}>{colors[1]}</Text>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileDetailScreen;
