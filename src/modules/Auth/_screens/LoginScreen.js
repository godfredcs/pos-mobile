import React, { Component } from 'react';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { emailChanged, passwordChanged } from '../_store/Actions';
import { CustomButton } from '../../../components';

class LoginScreen extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{margin: 40}}>
                            <TextField
                                label="Email"
                                value={ this.props.email }
                                onChangeText={ value => this.props.emailChanged(value) }
                            />

                            <TextField
                                secureTextEntry
                                label="Password"
                                value={ this.props.password }
                                onChangeText={ value => this.props.passwordChanged(value) }
                            />

                            <CustomButton
                                title="Login"
                                style={{ marginVertical: 20 }}
                                onPress={ () => this.props.navigation.navigate('Main') }
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    const { email, password } = state.auth;
    return { email, password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginScreen);
