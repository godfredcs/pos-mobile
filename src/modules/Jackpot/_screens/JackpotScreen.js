import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddJackpotModal } from '../_components';

class JackpotScreen extends Component {
    state = { showAddJackpotModal: false };

    /**
     * Function for show modal for adding Jackpots.
     */
    showAddJackpotModal = () => {
        this.setState(() => ({ showAddJackpotModal: true }));
    }

    /**
     * Function for removing modal for adding Jackpots.
     */
    closeAddJackpotModal = () => {
        this.setState(() => ({ showAddJackpotModal: false }));
    }

    render() {
        return (
            <View style={ Styles.container }>
                <Text>This is the JackpotScreen</Text>

                <AddButton
                    onPress={ this.showAddJackpotModal }
                    style={{ position: 'absolute', right: 20, bottom: 20 }} />

                <AddJackpotModal
                    visible={ this.state.showAddJackpotModal }
                    close={ this.closeAddJackpotModal } />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(JackpotScreen);
