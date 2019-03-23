import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { CommonInput } from '../../../components';
import { Colors } from '../../../globals';
import {
	itemNameChanged, itemQuantityChanged, itemUnitPriceChanged, itemWholePriceChanged,
	addItem, getAllItems
} from '../_store/Actions';

class AddItemModal extends Component {
	/**
	 * Method for adding item to database
	 *
	 * @return
	 */
	onAddItem = () => {
		const data = {
			name: this.props.item_name,
			quantity: this.props.item_quantity,
			unit_price: this.props.item_unit_price
		};

		if (data.name && Number(data.quantity) && Number(data.unit_price)) {
			return this.props.addItem(data, this.reloadAllItems);
		}

		return Alert.alert('Error', 'Please provide all the appropriate information');
	}

	reloadAllItems = () => {
		this.props.getAllItems();
		this.props.close();
	}

	render() {
		return (
			<Modal
				transparent
				visible={ this.props.visible }
				animationType="slide"
				onRequestClose={() => {}}>

				<View style={ styles.container }>
					<View style={ styles.card }>
						<View style={{ padding: 20 }}>
							<Text style={ styles.modalTitle }>ADD NEW ITEM</Text>
						</View>

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

						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<TouchableOpacity
								onPress={ this.props.close }
								style={[styles.buttons, { backgroundColor: Colors.danger, borderBottomLeftRadius: 5 }]}>

								<Text style={ styles.buttonText }>CLOSE</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={ this.onAddItem }
								style={[styles.buttons, { backgroundColor: Colors.accent, borderBottomRightRadius: 5 }]}>

								<Text style={ styles.buttonText }>ADD</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		position: 'relative',
		justifyContent: 'center',
		backgroundColor: 'rgba(0 , 0 , 0 , 0.75)',
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.accent
	},
	card: {
		margin: 20,
		borderRadius: 5,
		backgroundColor: '#FFF'
	},
	buttons: {
		flex: 1,
		paddingVertical: 15,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
	}
};

const mapStateToProps = state => {
	const { item_name, item_quantity, item_unit_price, item_whole_price } = state.items;
	return { item_name, item_quantity, item_unit_price, item_whole_price };
};

export default connect(mapStateToProps, {
	itemNameChanged, itemQuantityChanged, itemUnitPriceChanged, itemWholePriceChanged,
	addItem, getAllItems
})(AddItemModal);
