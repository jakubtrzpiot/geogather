import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddEventButton from '../components/AddEventButton';

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
    getLocation();
  }, []);

  const handleSelect = details => {
    setSearchLocation({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          region={
            searchLocation
              ? {
                  latitude: searchLocation.latitude,
                  longitude: searchLocation.longitude,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                }
              : null
          }
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          ></Marker>
        </MapView>
      )}
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={handleSelect}
          fetchDetails={true}
          styles={{
            container: {
              flex: 0,
              backgroundColor: 'transparent',
              borderWidth: 0,
              marginTop: 5,
            },
            textInputContainer: {
              flex: 1,
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderRadius: 20,
            },
            textInput: {
              flex: 1,
              height: 40,
              color: '#5d5d5d',
              fontSize: 16,
              borderWidth: 0,
              borderRadius: 20,
              paddingHorizontal: 10,
            },
            listView: {
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 20,
              marginHorizontal: 20,
            },
          }}
          query={{
            key: 'AIzaSyDa1yxv10Ek7cI9Hc4ZbaY_dpFs7dcME0k',
            language: 'en',
            components: 'country:pl',
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          title="GeoGather"
          onPress={() => navigation.navigate('Map')}
        >
          <Ionicons name="reorder-four-sharp" size={40} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    elevation: 3,
    padding: 18,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVerical: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
