import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <StatusBar style="auto" />
            <Button title="Go to Detail" onPress={() => props.navigation.push('HomeDetail')} />
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
