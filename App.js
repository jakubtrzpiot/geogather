import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './src/screens/MapScreen';
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      <Text>hello</Text>
      <StatusBar style="auto" />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
