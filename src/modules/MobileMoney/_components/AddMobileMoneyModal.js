import React from 'react';
import { Modal, View, Text, Picker, TouchableOpacity } from 'react-native';
import { CommonInput } from '../../../components';
import { Colors } from '../../../globals';

const AddMobileMoneyModal = ({ visible, close }) => (
	<Modal
		transparent
		visible={ visible }
		animationType="slide"
		onRequestClose={() => {}}>

		<View style={ styles.container }>
			<View style={ styles.card }>
				<View style={{ padding: 20 }}>
					<Text style={ styles.modalTitle }>ADD NEW MOBILE MONEY</Text>
				</View>

				<View style={{ padding: 20 }}>
                    <Picker>
                        <Picker.Item label="Cash in" value="cash_in" />
                        <Picker.Item label="Cash out" value="cash_out" />
                    </Picker>

                    <CommonInput
                        label="Name" />

                    <CommonInput
                        label="Phone" />

                    <CommonInput
                        label="Commission" />

                    <CommonInput
                        label="Amount" />
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<TouchableOpacity
                        onPress={ close }
                        style={[styles.buttons, { backgroundColor: Colors.danger, borderBottomLeftRadius: 5 }]}>

						<Text style={ styles.buttonText }>CLOSE</Text>
					</TouchableOpacity>

					<TouchableOpacity
                        onPress={ close }
                        style={[styles.buttons, { backgroundColor: Colors.accent, borderBottomRightRadius: 5 }]}>

						<Text style={ styles.buttonText }>ADD</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	</Modal>
);

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
		fontSize: 18,
		color: '#FFF',
		fontWeight: '600',
		textAlign: 'center',
	}
};

export default AddMobileMoneyModal;
