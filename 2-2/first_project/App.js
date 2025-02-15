import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      {/* <Tab.Navigator
        // screenOptions={() => ({
        //   // tabBarIcon: () =>
        //   tabBarIcon: ({ color }) =>
        //   (<Ionicons
        //     size={25}
        //     name={'trophy'}
        //     // color={'tomato'}
        //     color={color}
        //   />),
        //   // 改成這樣
        //   tabBarActiveTintColor: 'tomato', // 設定活動標籤的顏色
        //   tabBarInactiveTintColor: 'gray', // 設定非活動標籤的顏色
        // })}
        // 下方無法使用
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}

        screenOptions={({ route }) => ({
          // tabBarIcon: () =>
          // tabBarIcon: ({ color }) => {
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              // iconName = focused ? 'trophy' : 'home'
              // return <Image source={{ uri: 'https://png.pngtree.c om/png-clipart/20240308/original/pngtree-blank-pink-button-png-image_14542166.png' }} style={{ width: 25, height: 25 }} />
              return <Image source={require('./assets/favicon.png')} style={{ width: 25, height: 25 }} />
            } else if (route.name == 'Profile') {
              iconName = focused ? 'person' : 'skull'
            }
            return <Ionicons size={25} name={iconName} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        initialRouteName='Home'
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}


      {/* stack navigator */}
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerBackTitle: '返回',

        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
      </Stack.Navigator>


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
