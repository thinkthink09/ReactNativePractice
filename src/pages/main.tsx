import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default () => {
    const [username, onChangeText] = React.useState('username here');

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={username}
            />
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