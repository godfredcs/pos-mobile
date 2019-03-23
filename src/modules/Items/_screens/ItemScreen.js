import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Styles } from '../../../globals';
import { AddButton } from '../../../components';
import { AddItemModal } from '../_components';
import { getAllItems, selectItem } from '../_store/Actions';
import { Ionicons } from '@expo/vector-icons';

class ItemScreen extends Component {
    state = { showAddItemModal: false };

    componentDidMount() {
        this.props.getAllItems();
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    /**
     * Function for show modal for adding items
     *
     * @return {void}
     */
    showAddItemModal = () => {
        this.setState(() => ({ showAddItemModal: true }));
    }

    /**
     * Function for removing modal for adding items
     *
     * @return {void}
     */
    closeAddItemModal = () => {
        this.setState(() => ({ showAddItemModal: false }));
    }

    /**
     * Method for rendering the list of items
     *
     * @return {Array}
     */
    renderItems = () => {
        return this.props.items.map(item => (
            <TouchableOpacity key={ item.id } style={ styles.row } onPress={() => this.itemPress(item)}>
                <Text style={{ fontSize: 18 }}>{ item.name }</Text>

                <Ionicons name="ios-arrow-forward" size={ 20 } color="#CCC" />
            </TouchableOpacity>
        ));
    }

    /**
     * Method for when an item is selected
     *
     * @param {Object} item
     * @return {void}
     */
    itemPress = item => {
        this.props.selectItem(item);
        this.props.navigation.navigate('ItemViewScreen', { title: item.name });
    }

    render() {
        return (
            <View style={ Styles.container }>

                <ScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={ false }>
                    { this.renderItems() }
                </ScrollView>

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

const styles = StyleSheet.create({
    row: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomColor: '#CCC',
        justifyContent: 'space-between'
    }
});

const mapStateToProps = state => {
    const { items } = state.items;
    return { items };
};

export default connect(mapStateToProps, { getAllItems, selectItem })(ItemScreen);
