import React from 'react';
import Main from './pages/main';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <Main />
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