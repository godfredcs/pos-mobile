import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => (
    <View style={ styles.container }>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Point of sales application</Text>
        <Text>developed by Addai Godfred Boateng</Text>
        <Text>email: addaiz.godfred@gmail.com</Text>
        <Text>number: +233247512141</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center'
    }
});
