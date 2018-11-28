import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { CommonInput } from '../../../components';
import { Colors } from '../../../globals';

const AddSaleModal = ({ visible, close }) => (
	<Modal
		transparent
		visible={ visible }
		animationType="slide"
		onRequestClose={() => {}}>

		<View style={ styles.container }>
			<View style={ styles.card }>
				<View style={{ padding: 20 }}>
					<Text style={ styles.modalTitle }>ADD NEW JACKPOT</Text>
				</View>

				<View style={{ padding: 20 }}>
                    <CommonInput
                        label="Name" />

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
		color: '#FFF',
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center',
	}
};

export default AddSaleModal;
