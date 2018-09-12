import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class SaleScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>This is the SaleScreen</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(SaleScreen);
