import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Styles, Helpers, Colors } from '../../../globals';
import { CommonInput } from '../../../components';

class ItemViewScreen extends Component {
    state = { showEditForm: false, showDeleteForm: false };

    isAdmin = () => {
        if (this.props.user && this.props.user.role) {
            if (this.props.user.role.name === 'admin') {
                return true;
            }
        }

        return false;
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    renderSelected = () => {
        if (!this.props.selected_item) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={ styles.card }>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{ this.props.selected_item.name }</Text>

                        {
                            !this.isAdmin() || this.state.showDeleteForm
                                ? null
                                : <TouchableOpacity onPress={ () => this.setState(state => ({ showEditForm: !state.showEditForm })) }>
                                    <Text style={{ color: '#FF9900', fontSize: 20 }}>{ !this.state.showEditForm ? 'Edit' : 'Cancel' }</Text>
                                </TouchableOpacity>
                        }

                        {
                            !this.isAdmin() || this.state.showEditForm
                                ? null
                                : <TouchableOpacity onPress={ () => this.setState(state => ({ showDeleteForm: !state.showDeleteForm })) }>
                                    <Text style={{ color: '#F00', fontSize: 20 }}>{ !this.state.showDeleteForm ? 'Delete' : 'Cancel' }</Text>
                                </TouchableOpacity>
                        }

                    </View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'baseline', flexDirection: 'row' }}>
                        <Text>Quantity: <Text style={{ fontWeight: 'bold' }}>{ this.props.selected_item.quantity }</Text></Text>
                        <Text>Unit price: <Text style={{ fontWeight: 'bold' }}>{ Helpers.formattedCedis(this.props.selected_item.unit_price) }</Text></Text>
                    </View>

                    <View>
                        { this.editItem() }
                        { this.deleteItem() }
                    </View>
                </View>

                <View style={[styles.card, { backgroundColor: '#C6E2FF', flex: 1 }]}>
                    <ScrollView contentContainerStyle={{ flex: 1 }}>
                        { this.renderSales() }
                    </ScrollView>
                </View>
            </View>
        )
    }

    renderSales = () => {
        if (!this.props.selected_item || !this.props.selected_item.sales) {
            return null;
        }

        return this.props.selected_item.sales.map(
            sale => <View style={{ borderColor: Colors.accent, borderWidth: 1, marginBottom: 30, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} key={ sale.id }>
                <View>
                    <Text style={ styles.borders }>Added on</Text>
                    <Text style={ styles.borders }>Unit quantity</Text>
                    <Text style={ styles.borders }>Whole quantity</Text>
                    <Text style={ styles.borders }>Amount</Text>
                </View>

                <View style={{ borderLeftColor: Colors.accent, borderLeftWidth: 1 }}>
                    <Text style={ styles.borders }>{ Helpers.formattedDateTime(sale.created_at) }</Text>
                    <Text style={ styles.borders }>{ sale.unit_quantity }</Text>
                    <Text style={ styles.borders }>{ sale.whole_quantity }</Text>
                    <Text style={ styles.borders }>{ Helpers.formattedCedis(sale.amount) }</Text>
                </View>
            </View>
        );
    }

    editItem = () => {
        if (this.state.showEditForm) {
            return (
                <View style={{ padding: 20 }}>
                    <CommonInput
                        label="Name"
                        value={ this.props.item_name }
                        onChangeText={ value => this.props.itemNameChanged(value) }
                    />

                    <CommonInput
                        label="Quantity"
                        value={ this.props.item_quantity }
                        onChangeText={ value => this.props.itemQuantityChanged(value) }
                    />

                    <CommonInput
                        label="Unit price"
                        value={ this.props.item_unit_price }
                        onChangeText={ value => this.props.itemUnitPriceChanged(value) }
                    />
                </View>
            );
        }

        return null;
    }

    deleteItem = () => {
        if (this.state.showDeleteForm) {
            return (
                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 18 }}>
                        { `Are you sure you want to delete ${ this.props.selected_item.name } ?` }
                    </Text>

                    <View>
                        <TouchableOpacity
                            onPress={() => console.log('null')}
                            style={{ backgroundColor: '#F00', paddingVertical: 5, paddingHorizontal: 50, alignSelf: 'center', borderRadius: 30 }}
                        >
                            <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 18 }}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return null;
    }

    render() {
        return (
            <View style={ Styles.container }>
                { this.renderSelected() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 20
    },

    borders: {
        padding: 5,
        paddingVertical: 5,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        borderBottomColor: '#FFF'
    }
});

const mapStateToProps = state => {
    const { selected_item, item_name, item_quantity, item_unit_price } = state.items;
    const { user } = state.auth;

    return { selected_item, item_name, item_quantity, item_unit_price, user };
}

export default connect(mapStateToProps)(ItemViewScreen);