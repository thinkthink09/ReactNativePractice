import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Theme from '../theme'

export default () => {
    const [username, onChangeText] = React.useState('username here');

    const loginHandler = () => {
        console.log(username, 'is logging in');
    }

    return (
        <View style={styles.container}>
            <Text style={[Theme.text]}>Login</Text>
            <TextInput
                style={[Theme.text]}
                onChangeText={text => onChangeText(text)}
                value={username}
            />
            <Button title="Login" onPress={loginHandler}/>
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