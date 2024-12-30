import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './src/components/shared/i18n';

import WelcomePage from './src/components/WelcomePage';
import SignInPage from './src/components/SignInPage';
import SignUpPage from './src/components/SignUpPage';
import ProfileScreen from './src/components/ProfileScreen';
import ColorPage from './src/components/ColorPage';
import ProfileDetailScreen from './src/components/ProfileDetailScreen';
import SettingsPage from './src/components/Settings';
import ChangePasswordScreen from './src/components/PasswordChange';
import ProfileAdmin from './src/components/ProfileAdmin';
import ProfileEditScreen from './src/components/ProfileEditScreen';
import VerifyEmail from './src/components/VerifyEmail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ColorPage" component={ColorPage} />
        <Stack.Screen name="Details" component={ProfileDetailScreen} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="PasswordChange" component={ChangePasswordScreen} />
        <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
