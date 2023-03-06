import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

export default function AddEventButton () {
    const onPress = () => {

    }

    return (
        <View style={styles.container}>
        <Button
            onPress={AddEventButton}
            title="ADD EVENT"
            accessibilityLabel="Add an event"
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {bottom: 0, right: 0, position: 'absolute', marginHorizontal: 40, marginVertical: 30}
});

