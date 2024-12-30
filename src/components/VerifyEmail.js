import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VerifyEmail = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.message}>
      Please check your email and click on the verification link to verify your account.
    </Text>
    <Button title="Go to Login" onPress={() => navigation.navigate('SignIn')} />
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#704BB3',
        marginTop: 55
      },
  message: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default VerifyEmail;
