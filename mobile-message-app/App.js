import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BBCProvider } from './src/context/BBCContext';

import LoginScreen from './src/screens/LoginScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import AppInfoScreen from './src/screens/AppInfoScreen';
import IdentityScreen from './src/screens/IdentityScreen';
import FormScreen from './src/screens/FormScreen';
import SummaryScreen from './src/screens/SummaryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BBCProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: 'Main Menu' }} />
          <Stack.Screen name="AppInfo" component={AppInfoScreen} options={{ title: 'App Info' }} />
          <Stack.Screen name="Identity" component={IdentityScreen} options={{ title: 'Identity' }} />
          <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Form' }} />
          <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'Summary' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </BBCProvider>
  );
}
