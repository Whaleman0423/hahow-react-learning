import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { useState } from 'react'

import MyColoredBox from './src/components/colored-box/MyColoredBox';
import scaffoldStyle from './src/components/styles/scaffoldStyle';

export default function App() {

  const [myColor, setMyColor] = useState('white');

  const randomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setMyColor(randomColor);
  }

  return (
    <View style={scaffoldStyle.container}>

      <MyColoredBox myColor={myColor} />

      <Button
        title="Change Color"
        onPress={() => randomColor()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

