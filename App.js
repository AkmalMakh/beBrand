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
import AboutAuthorPage from './src/components/AboutAuthorPage';
import HowToUse from './src/components/HowToUse';
import AboutColorTyping from './src/components/AboutColorTyping';
import ChangePasswordScreen from './src/components/PasswordChange';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ColorPage" component={ColorPage} />
        <Stack.Screen name="Details" component={ProfileDetailScreen} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="AboutAuthor" component={AboutAuthorPage} />
        <Stack.Screen name="HowToUse" component={HowToUse} />
        <Stack.Screen name="AboutColor" component={AboutColorTyping} />
        <Stack.Screen name="PasswordChange" component={ChangePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
