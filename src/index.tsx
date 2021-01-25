import React from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, Text } from 'react-native';

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Hello World 🎉
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});