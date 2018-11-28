import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddSaleModal } from '../_components';

class SaleScreen extends Component {
    state = { showAddSaleModal: false };

    /**
     * Function for show modal for adding sales.
     */
    showAddSaleModal = () => {
        this.setState(() => ({ showAddSaleModal: true }));
    }

    /**
     * Function for removing modal for adding sales.
     */
    closeAddSaleModal = () => {
        this.setState(() => ({ showAddSaleModal: false }));
    }

    render() {
        return (
            <View style={ Styles.container }>
                <Text>This is the SaleScreen</Text>

                <AddButton
                    onPress={ this.showAddSaleModal }
                    style={{ position: 'absolute', right: 20, bottom: 20 }} />

                <AddSaleModal
                    visible={ this.state.showAddSaleModal }
                    close={ this.closeAddSaleModal } />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {})(SaleScreen);
