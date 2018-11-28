import React from 'react';
import {KeyboardAvoidingView, Keyboard, ScrollView, View, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {TextField} from 'react-native-material-textfield';

import {emailChanged, passwordChanged} from '../_store/AuthActions';

class AccountScreen extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <ScrollView style={{flex: 1, padding: 40}}>
                        <TextField
                            editable={false}
                            label="Email"
                            value={this.props.email}
                            onChangeText={value => this.props.emailChanged(value)}
                        />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    const {email, password} = state.auth;
    return {email, password};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(AccountScreen);
