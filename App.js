import React, { useEffect } from 'react';
import Login from './src/screens/LoginScreen';
import Signup from './src/screens/SignupScreen';
import MapScreen from './src/screens/MapScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import isLoggedIn from './src/api/Users';
import SettingsScreen from './src/screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    if (!isLoggedIn) {
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerBackVisible: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerBackVisible: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
