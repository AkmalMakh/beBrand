import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';

const ColorSection = ({header, subHeader, description, colors, navigation}) => {
  return (
    <View>
      <Text style={[styles.header2]}>{header}</Text>
      <Text style={[styles.header3, {marginBottom: 0}]}>{subHeader}</Text>
      <Text style={[styles.header4]}>{description}</Text>
      <View style={styles.gridContainer}>
        {Array.from(Array(3).keys()).map(row => (
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
    </View>
  );
};

export default ColorSection;
