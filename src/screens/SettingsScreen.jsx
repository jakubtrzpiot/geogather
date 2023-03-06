import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function SettingPage() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleLocation = () => {
    setLocationEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.feature}>
        <Text style={styles.featureText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>
      <View style={styles.feature}>
        <Text style={styles.featureText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>
      <View style={styles.feature}>
        <Text style={styles.featureText}>Location Services</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={locationEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleLocation}
          value={locationEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  featureText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
