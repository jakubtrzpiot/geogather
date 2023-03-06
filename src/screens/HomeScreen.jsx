import React from 'react';
import { StyleSheet, View, ScrollView, Text, Pressable } from 'react-native';
import EventTile from '../components/EventTile';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  const data = require('../data.json');
  const events = [];
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, paddingTop: 10, marginBottom: 66 }}>
        {events.map(({ time, date, description, iconName }, i) => (
          <EventTile
            key={i}
            time={time}
            date={date}
            description={description}
            iconName={iconName}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          title="GeoGather"
          onPress={() => navigation.navigate('Map')}
        >
          <Ionicons name="earth-sharp" size={30} />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-sharp" size={30} />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Friends')}
        >
          <Ionicons name="chatbubbles-sharp" size={30} />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="options-sharp" size={30} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    elevation: 3,
    padding: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
