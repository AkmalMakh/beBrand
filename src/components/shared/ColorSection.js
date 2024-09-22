import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';

// Component to render a single color box
const ColorBox = ({color, onPress, keyProp}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.boxContainer} key={keyProp}>
      <View style={[styles.box, {backgroundColor: color}]} />
      <Text style={styles.hexTextBox}>{color}</Text>
    </View>
  </TouchableOpacity>
);

const ColorBox2 = ({color, onPress, keyProp}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.box2Container} key={keyProp}>
      <View
        style={[
          styles.box2,
          {backgroundColor: color},
        ]}
      />
      <Text style={styles.hexTextBox2}>{color}</Text>
    </View>
  </TouchableOpacity>
);

// Helper function to render rows of color boxes
const renderColorRow = (RowComponent, rowIndex, colors, navigation, userData, header) => (
  <View style={styles.row} key={`row-${rowIndex}`}>
    {Array.from({length: 3}).map((_, colIndex) => {
      const color = colors[rowIndex * 3 + colIndex];
      return (
        <RowComponent
          key={`${rowIndex}-${colIndex}`}
          color={color}
          onPress={() => navigation.navigate('ColorPage', {color, userData, header, colIndex})}
          keyProp={`${rowIndex}-${colIndex}`} // Unique key prop
        />
      );
    })}
  </View>
);

// Component to render a section of color boxes with header and description
const ColorSection = ({header, subHeader, description, colors, navigation, userData}) => (
  <View>
    <Text style={styles.header2}>{header}</Text>
    <Text style={[styles.header3, {marginBottom: 0}]}>{subHeader}</Text>
    <Text style={styles.header4}>{description}</Text>
    <View style={styles.gridContainer}>
      {Array.from({length: 3}).map((_, row) =>
        renderColorRow(ColorBox, row, colors, navigation, userData, header),
      )}
    </View>
  </View>
);

// Component to render a grid of color boxes
const ColorGrid = ({colors, navigation, userData}) => (
  <View style={styles.gridContainer}>
    {Array.from({length: 11}).map((_, row) =>
      renderColorRow(ColorBox, row, colors, navigation, userData),
    )}
  </View>
);

// Component to render a section with a different set of color boxes and description
const ColorDepthSection = ({header, description, colors, navigation, userData}) => (
  <View>
    <Text style={styles.header2}>{header}</Text>
    <Text style={styles.header4}>{description}</Text>
    <View style={styles.row}>
      {Array.from({length: colors.length}).map((_, row) =>
        renderColorRow(ColorBox2, row, colors, navigation, userData, header),
      )}
    </View>
  </View>
);

export {ColorSection, ColorGrid, ColorDepthSection};
