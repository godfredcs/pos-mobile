import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import {LoginScreen} from '../modules';

export default createStackNavigator({
    LoginScreen
}, {
    headerMode: 'none'
});
