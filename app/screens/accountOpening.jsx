// AEPS.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountOpening = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Opening</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default AccountOpening;
