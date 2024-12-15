import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from '../../styles/styles';

const ColorBox = ({ color, onPress }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: color.hex }]} />
        {/* Translate the color name */}
        <Text style={styles.hexTextBox}>{t(color.name)}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Fixed ColorBox2 to return JSX correctly and ensure it shows both color and text
const ColorBox2 = ({ color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.box2Container}>
        <View style={[styles.box2, { backgroundColor: color.hex }]} />
      </View>
    </TouchableOpacity>
  );
};

// Helper function to render rows of color boxes
const renderColorRow = (RowComponent, rowIndex, colors, columns, navigation, userData, header) => (
  <View style={styles.row} key={`row-${rowIndex}`}>
    {Array.from({ length: columns }).map((_, colIndex) => {
      
      const colorIndex = rowIndex * columns + colIndex;

      // Prevent accessing out-of-bounds index
      if (colorIndex >= colors.length) {
        return null;
      }

      const color = colors[colorIndex];
      // Ensure color is defined and has both hex and name properties
      if (!color || !color.hex || !color.name) {
        return null;
      }

      return (
        <RowComponent
          key={`${rowIndex}-${colIndex}`}
          color={color}
          onPress={() => navigation.navigate('ColorPage', { color, userData, header, colIndex })}
        />
      );
    })}
  </View>
);

// Component to render a section of color boxes with header and description
const ColorSection = ({ header, subHeader, description, colors, navigation, userData }) => (
  <View>
    <Text style={styles.header2}>{header}</Text>
    <Text style={[styles.header3, { marginBottom: 0 }]}>{subHeader}</Text>
    <Text style={styles.header4}>{description}</Text>
    <View style={styles.gridContainer}>
      {Array.from({ length: Math.ceil(colors.length / 3) }).map((_, row) =>
        renderColorRow(ColorBox, row, colors, 3, navigation, userData, header),
      )}
    </View>
  </View>
);

// Component to render a grid of color boxes
const ColorGrid = ({ colors, navigation, userData }) => (
  <View style={styles.gridContainer}>
    {Array.from({ length: Math.ceil(colors.length / 3) }).map((_, row) =>
      renderColorRow(ColorBox, row, colors, 3, navigation, userData),
    )}
  </View>
);

// Component to render a section with a different set of color boxes and description (bonus colors)
// Ensure that only 5 colors are inlined per row and that both color and text are displayed
const ColorDepthSection = ({ header, description, colors, navigation, userData }) => (
  <View>
    <Text style={styles.header2}>{header}</Text>
    <Text style={styles.header4}>{description}</Text>
    <View style={styles.gridContainer}>
      {Array.from({ length: Math.ceil(colors.length / 5) }).map((_, row) =>
        renderColorRow(ColorBox2, row, colors, 5, navigation, userData, header),
      )}
    </View>
  </View>
);

export { ColorSection, ColorGrid, ColorDepthSection };
