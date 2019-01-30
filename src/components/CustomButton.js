import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors, Styles } from '../globals';

const CustomButton = ({ title, color=Colors.tertiary, backgroundColor=Colors.accent, style, onPress }) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor,
            padding: 10,
            ...Styles.shadow,
            ...style
        }
    });

    return (
        <TouchableOpacity style={ styles.container } onPress={ onPress }>
            <Text style={{ color, textAlign: 'center' }}>{ title }</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
