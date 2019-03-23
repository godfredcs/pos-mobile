import React, { Component } from 'react';
import { KeyboardAvoidingView, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Styles, Helpers } from '../../../globals';
import { emailChanged, passwordChanged } from '../_store/Actions';

class AccountScreen extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={ Styles.container } behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <ScrollView style={{ flex: 1, padding: 20 }}>
                        <TextField
                            editable={ false }
                            label="Role"
                            value={ this.props.user.role.name }
                        />

                        <TextField
                            editable={ false }
                            label="Email"
                            value={ this.props.user.email }
                        />

                        <TextField
                            editable={ false }
                            label="Firstname"
                            value={ this.props.user.firstname }
                            onChangeText={ value => this.props.emailChanged(value) }
                        />

                        <TextField
                            editable={ false }
                            label="Lastname"
                            value={ this.props.user.lastname }
                            onChangeText={ value => this.props.emailChanged(value) }
                        />

                        <TextField
                            editable={ false }
                            label="Added on"
                            value={ Helpers.formattedDateTime(this.props.user.created_at) }
                            onChangeText={ value => this.props.emailChanged(value) }
                        />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;
    return { user };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(AccountScreen);
