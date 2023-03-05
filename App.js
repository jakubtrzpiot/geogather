import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import firebase from 'firebase/app';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignupScreen';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is signed in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={{ flex: 1 }}>
      {user ? (
        <View>
          <Text>You are logged in as {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <View>
          <LoginScreen />
          <SignUpScreen />
        </View>
      )}
    </View>
  );
}
