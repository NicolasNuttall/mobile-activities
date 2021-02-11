import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [icon, setIcon]=useState("affiliatetheme");

  const possibleIcons =[
    'at',
    'biking',
    'bitcoin',
    'book open',
    'box',
  ]
  const changeIcon = () =>{
    const newIcon = possibleIcons[Math.floor(Math.random()* possibleIcons.length)];
    setIcon(newIcon);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeIcon}>
        <FontAwesome5 name={icon} size={80} color="black" />
      </TouchableOpacity>
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
