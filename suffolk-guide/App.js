import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import BuryStEdmundsScreen from './src/screens/BuryStEdmundsScreen';
import FelixstoweScreen from './src/screens/FelixstoweScreen';
import LowestoftScreen from './src/screens/LowestoftScreen';
import IpswichScreen from './src/screens/IpswichScreen';
import HaverHillScreen from './src/screens/HaverHillScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRootName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Choose an area of Suffolk"}}/>
        <Stack.Screen name="Bury St Edmunds" component={BuryStEdmundsScreen}/>
        <Stack.Screen name="Felixstowe" component={FelixstoweScreen}/>
        <Stack.Screen name="Lowestoft" component={LowestoftScreen}/>
        <Stack.Screen name="Ipswich" component={IpswichScreen}/>
        <Stack.Screen name="Haverhill" component={HaverHillScreen}/>
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
