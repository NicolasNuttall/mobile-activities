import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LowestoftScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>This is the Lowesoft Screen</Text>
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

export default LowestoftScreen;