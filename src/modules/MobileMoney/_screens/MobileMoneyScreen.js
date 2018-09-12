import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class MobileMoneyScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>This is the MobileMoneyScreen</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(MobileMoneyScreen);
