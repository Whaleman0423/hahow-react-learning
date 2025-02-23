import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeMain'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
}

function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='ProfileMain'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false, // 關閉 tab 頁面上的 header
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              return <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHWBxaFsSkpd8xbDDgdhBVdC7jLtKfmlhIA&s' }}
                style={{ width: 25, height: 25 }}
              />
            } else if (route.name == 'Profile') {
              iconName = focused ? 'person' : 'skull'
              return <Ionicons name={iconName} size={25} color={color} />
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Profile" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
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
