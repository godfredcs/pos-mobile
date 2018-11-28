import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { AddButton } from '../../../components';
import { Styles } from '../../../globals';

class DashboardScreen extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View style={ Styles.container }>
                <Text>This is the DashboardScreen</Text>

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(DashboardScreen);
