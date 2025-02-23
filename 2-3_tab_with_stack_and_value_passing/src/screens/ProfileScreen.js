import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button
                title='go to profile detail screen'
                onPress={() => props.navigation.push('ProfileDetail')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})