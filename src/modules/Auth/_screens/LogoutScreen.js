import { Component } from 'react';

export default class LogoutScreen extends Component {
    componentDidMount() {
        this.logout();
    }

    logout = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return null;
    }
}
