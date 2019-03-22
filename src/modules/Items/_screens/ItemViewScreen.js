import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Styles, Helpers, Colors } from '../../../globals';

class ItemViewScreen extends Component {
    isAdmin = () => {
        if (this.props.user && this.props.user.role) {
            if (this.props.user.role.name === 'admin') {
                return true;
            }
        }

        return false;
    }

    renderSelected = () => {
        if (!this.props.selected_item) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={ styles.card }>
                    <View>
                        <Text>Quantity: <Text>{ this.props.selected_item.quantity }</Text></Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginVertical: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{ this.props.selected_item.name }</Text>

                        {
                            this.isAdmin()
                                ? <TouchableOpacity onPress={() => {}}>
                                    <Text style={{ color: '#FF9900', fontSize: 20 }}>Edit</Text>
                                </TouchableOpacity>
                                : null
                        }

                        {
                            this.isAdmin()
                                ? <TouchableOpacity onPress={() => {}}>
                                    <Text style={{ color: '#F00', fontSize: 20 }}>Delete</Text>
                                </TouchableOpacity>
                                : null

                        }

                    </View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'baseline', flexDirection: 'row' }}>
                        <Text>Whole price: <Text>{ Helpers.formattedCedis(this.props.selected_item.whole_price) }</Text></Text>
                        <Text>Unit price: <Text>{ Helpers.formattedCedis(this.props.selected_item.unit_price) }</Text></Text>
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
    const { selected_item } = state.items;
    const { user } = state.auth;

    return { selected_item, user };
}

export default connect(mapStateToProps)(ItemViewScreen);