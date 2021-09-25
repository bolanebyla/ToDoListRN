import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from "./src/components/NavBar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar title={'Todo List'}/>
      <Text style={ {'color': 'red', fontSize: 25} }>Hello, world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
