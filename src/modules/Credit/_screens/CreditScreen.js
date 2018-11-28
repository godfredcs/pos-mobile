import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';

class CreditScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View style={ Styles.container }>
                <Text>This is the CreditScreen</Text>

                <AddButton
                    onPress={() => console.log('this is lit')}
                    style={{ position: 'absolute', right: 20, bottom: 20 }} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(CreditScreen);
