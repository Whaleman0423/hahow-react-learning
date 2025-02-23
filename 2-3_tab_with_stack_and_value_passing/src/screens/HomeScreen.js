import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {

    const [food, setFood] = useState('candy');

    const changeFood = (foodGet) => {
        setFood(foodGet);
    }

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Text>{food}</Text>
            <Button
                title='go to home detail screen'
                onPress={() => props.navigation.push(
                    'HomeDetail',
                    {
                        name: 'avon',
                        functionA: arg => changeFood(arg)
                    }
                )}
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