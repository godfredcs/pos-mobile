import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';

class CreditScreen extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View>
                <Text>This is the CreditScreen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(CreditScreen);
