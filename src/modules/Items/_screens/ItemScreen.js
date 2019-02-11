import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddItemModal } from '../_components';

class ItemScreen extends Component {
    state = { showAddItemModal: false };

    /**
     * Function for show modal for adding items.
     */
    showAddItemModal = () => {
        this.setState(() => ({ showAddItemModal: true }));
    }

    /**
     * Function for removing modal for adding items.
     */
    closeAddItemModal = () => {
        this.setState(() => ({ showAddItemModal: false }));
    }

    render() {
        return (
            <View style={ Styles.container }>

                <AddButton
                    onPress={ this.showAddItemModal }
                    style={{ position: 'absolute', right: 20, bottom: 20 }} />

                <AddItemModal
                    visible={ this.state.showAddItemModal }
                    close={ this.closeAddItemModal } />
            </View>
        )
    }
}

export default ItemScreen;
