import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from './src/components/WelcomePage';
import AboutUsPage from './src/components/AboutUsPage';
import SignInPage from './src/components/SignInPage';
import SignUpPage from './src/components/SignUpPage';
import ProfileScreen from './src/components/ProfileScreen';
import ColorPage from './src/components/ColorPage';
import ProfileDetailScreen from './src/components/ProfileDetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="AboutUs" component={AboutUsPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ColorPage" component={ColorPage} />
        <Stack.Screen name="Details" component={ProfileDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
