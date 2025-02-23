import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>ProfileDetailScreen</Text>
            <Button
                title='go back'
                onPress={() => props.navigation.pop()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});