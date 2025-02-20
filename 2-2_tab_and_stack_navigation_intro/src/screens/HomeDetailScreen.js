import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>HomeDetailScreen</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => props.navigation.pop()} />
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
});
