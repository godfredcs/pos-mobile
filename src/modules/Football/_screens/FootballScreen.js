import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';

class FootballScreen extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View>
                <Text>This is the FootballScreen</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(FootballScreen);
