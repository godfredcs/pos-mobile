import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Colors } from '../globals';

const CommonInput = ({ label, value, onChangeText }) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
        },
        input: {
            padding: 5,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#DDD'
        }
    });

    return (
        <View style={ styles.container }>
            <Text style={{ color: Colors.accent, marginBottom: 5 }}>{ label }</Text>

            <TextInput
                value={ value }
                style={ styles.input }
                onChangeText={ onChangeText }
            />
        </View>
    )
}

export default CommonInput;
