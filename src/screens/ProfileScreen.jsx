import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function ProfileScreen (){
  const [name, setName] = useState('John Doe');
  const [image, setImage] = useState(require('../../assets/default_profile.png'));

  const handleImageChange = () => {
    // Code to change profile image
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={image} style={styles.profileImage} />
        <Button
          type="clear"
          icon={<Icon name="edit" type="font-awesome" size={20} color="#fff" />}
          containerStyle={styles.editImageButton}
          onPress={handleImageChange}
        />
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        {/* Add other profile information here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profileInfoContainer: {
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
