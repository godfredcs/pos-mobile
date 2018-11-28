import React from 'react';
import {BackHandler} from 'react-native';

export default WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
                this.props.history.goBack();
                return true;
            });
        }

        componentWillUnmount() {
            this.backHandler.remove();
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
