import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';

// Component to render a single color box
const ColorBox = ({ color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: color }]} />
      <Text style={styles.hexTextBox}>{color}</Text>
    </View>
  </TouchableOpacity>
);

// Component to render a single color box with different styles
const ColorBox2 = ({ color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          { borderRadius: 10, height: 50, width: 50, backgroundColor: color },
        ]}
      />
      <Text style={[styles.hexText, { fontSize: 12 }]}>{color}</Text>
    </View>
  </TouchableOpacity>
);

// Helper function to render rows of color boxes
const renderColorRow = (RowComponent, rowIndex, colors, navigation) => (
  <View style={styles.row}>
    {Array.from({ length: 3 }).map((_, col) => {
      const color = colors[rowIndex * 3 + col];
      return (
        <RowComponent
          key={`${rowIndex}-${col}`}
          color={color}
          onPress={() => navigation.navigate('ColorPage', { color })}
        />
      );
    })}
  </View>
);

// Component to render a section of color boxes with header and description
const ColorSection = ({ header, subHeader, description, colors, navigation }) => (
  <View>
    <Text style={styles.header2}>{header}</Text>
    <Text style={[styles.header3, { marginBottom: 0 }]}>{subHeader}</Text>
    <Text style={styles.header4}>{description}</Text>
    <View style={styles.gridContainer}>
      {Array.from({ length: 3 }).map((_, row) => (
        renderColorRow(ColorBox, row, colors, navigation)
      ))}
    </View>
  </View>
);

// Component to render a grid of color boxes
const ColorGrid = ({ colors, navigation }) => (
  <View style={styles.gridContainer}>
    {Array.from({ length: 11 }).map((_, row) => (
      renderColorRow(ColorBox, row, colors, navigation)
    ))}
  </View>
);

// Component to render a section with a different set of color boxes and description
const ColorDepthSection = ({ header, description, colors, navigation }) => (
  <View>
    <Text style={styles.header2}>{header}</Text>
    <Text style={styles.header4}>{description}</Text>
    <View style={styles.row}>
      {Array.from({ length: 5 }).map((_, row) => (
        renderColorRow(ColorBox2, row, colors, navigation)
      ))}
    </View>
  </View>
);

export { ColorSection, ColorGrid, ColorDepthSection };
