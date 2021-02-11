import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HaverHillScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>This is the HaverHill Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({    
    container: {        
        flex: 1,        
        backgroundColor: '#fff',        
        alignItems: 'center',        
        justifyContent: 'center',
    },
});

export default HaverHillScreen;