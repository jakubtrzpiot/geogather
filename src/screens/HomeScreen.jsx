import React from 'react';
import { StyleSheet, View, ScrollView, Text, Pressable } from 'react-native';
import EventTile from '../components/EventTile';

function HomeScreen({ navigation }) {
  const events = [
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
    { time: '9:00 PM', date: '01.01.2023', description: 'test', iconName: '' },
  ];
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
          <Text style={styles.text}>Map</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.text}>Profile</Text>
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
    paddingHorizontal: 32,
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

export default HomeScreen;
