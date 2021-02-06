import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Theme from '../theme'

export default () => {
    return (
        <View style={styles.container}>
            <Text style={[Theme.text]}>Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        paddingTop: "20%"
    }, 
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});