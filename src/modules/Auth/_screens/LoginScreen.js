import React, { Component } from 'react';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { emailChanged, passwordChanged, attemptUserLogin } from '../_store/Actions';
import { Styles } from '../../../globals';
import { CustomButton, Spinner } from '../../../components';

const ICON = require('../../../../assets/icon.png');

class LoginScreen extends Component {
    attemptUserLogin = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.props.email)) {
            return Alert.alert('Email Error', 'Please provide a valid email address');
        }

        if (!this.props.password) {
            return Alert.alert('Password Error', 'Please provide password');
        }

        const data = {
            email: this.props.email,
            password: this.props.password
        };

        this.props.attemptUserLogin(data, () => this.props.navigation.navigate('Main'));
    }

    render() {
        return (
            <KeyboardAvoidingView style={ Styles.container } behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ alignItems: 'center', paddingTop: 40 }}>
                            <Image source={ ICON } resizeMode="contain" style={{ width: 300, height: 300 }} />
                        </View>

                        <View style={{ margin: 40 }}>
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

                            <View>
                                {
                                    this.props.attempting_user_login
                                        ? <Spinner />
                                        : <CustomButton
                                            title="Login"
                                            style={{ marginVertical: 20 }}
                                            onPress={ this.attemptUserLogin }
                                        />
                                }
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    const { email, password, attempting_user_login } = state.auth;
    return { email, password, attempting_user_login };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, attemptUserLogin })(LoginScreen);
