import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { storeUserData } from '../api/Users';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState(null);

  const clearInputs = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setRepassword('');
  };

  const handleSignUp = () => {
    if (!username || !email || !password || !repassword) {
      setError('Please fill in all fields');
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email');
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z]).{6,20}$/)) {
      setError('Password is too simple');
    } else if (password !== repassword) {
      setError('Passwords do not match');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          updateProfile(user, { displayName: username })
            .then(() => {
              console.log('User profile updated!');
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              setError('There was an error signing up, please try again');
            });
          storeUserData({ uid: user.uid, username: username });
          navigation.navigate('Home');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          if (errorCode == 'auth/email-already-in-use') {
            setError('Email already in use');
          }
        });
    }
    clearInputs();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What's your name?"
        autoCapitalize="none"
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat password"
        secureTextEntry
        value={repassword}
        onChangeText={repassword => setRepassword(repassword)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.signupLink}>Go back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signupLink: {
    marginTop: 20,
    color: 'blue',
  },
});
