
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {

  const [count,setCount] = useState(0); //0 is the default value
  const countIncrease = ()=>{
    setCount(count + 1);
  }
  const countDecrease = ()=>{
    if(count > 0){
      setCount(count - 1);
    }
    else{
      Alert.alert("Error, there cannot be a negative amount of people");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Button onPress={countIncrease} title="Add one etendee"/>
      <Button onPress={countDecrease} title="Remove one etendee"/>
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
  countText:{
    marginBottom:30,
    fontSize:50
  }
});
