import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddItemModal } from '../_components';
import { getAllItems } from '../_store/Actions';

class ItemScreen extends Component {
    state = { showAddItemModal: false };

    componentDidMount() {
        this.props.getAllItems();
    }

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

const mapStateToProps = state => {
    const { items } = state.items;
    return { items };
};

export default connect(mapStateToProps, { getAllItems })(ItemScreen);
