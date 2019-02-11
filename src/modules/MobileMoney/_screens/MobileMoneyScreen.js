import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddMobileMoneyModal } from '../_components';

class MobileMoneyScreen extends Component {
    state = { showAddMobileMoneyModal: false };

    /**
     * Function for show modal for adding sales.
     */
    showAddMobileMoneyModal = () => {
        this.setState(() => ({ showAddMobileMoneyModal: true }));
    }

    /**
     * Function for removing modal for adding sales.
     */
    closeAddMobileMoneyModal = () => {
        this.setState(() => ({ showAddMobileMoneyModal: false }));
    }

    render() {
        return (
            <View style={ Styles.container }>

                <AddButton
                    onPress={ this.showAddMobileMoneyModal }
                    style={{ position: 'absolute', right: 20, bottom: 20 }} />

                <AddMobileMoneyModal
                    visible={ this.state.showAddMobileMoneyModal }
                    close={ this.closeAddMobileMoneyModal} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(MobileMoneyScreen);
