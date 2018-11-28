import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddFootballModal } from '../_components';

class FootballScreen extends Component {
    state = { showAddFootballModal: false };

    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    /**
     * Function for show modal for adding Footballs.
     */
    showAddFootballModal = () => {
        this.setState(() => ({ showAddFootballModal: true }));
    }

    /**
     * Function for removing modal for adding Footballs.
     */
    closeAddFootballModal = () => {
        this.setState(() => ({ showAddFootballModal: false }));
    }

    render() {
        return (
            <View style={ Styles.container }>
                <Text>This is the FootballScreen</Text>

                <AddButton
                    onPress={ this.showAddFootballModal }
                    style={{ position: 'absolute', right: 20, bottom: 20 }} />

                <AddFootballModal
                    visible={ this.state.showAddFootballModal }
                    close={ this.closeAddFootballModal } />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(FootballScreen);
