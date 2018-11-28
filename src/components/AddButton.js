import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Styles } from '../globals';

const AddButton = ({ onPress, style }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: Colors.accent,
            borderRadius: 30,
            paddingHorizontal: 15,
            paddingVertical: 5,
            ...Styles.shadow
        }
    });

    return (
        <TouchableOpacity
            onPress={ onPress }
            style={[styles.container, style]}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#FFF' }}>+</Text>
        </TouchableOpacity>
    )
}

export default AddButton;
