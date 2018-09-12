import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {FontAwesome, Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {drawerScreenNavigationOptions, stackScreenOptions, drawerStackNavigationOptions, drawerContentComponents} from './config';

import {
    LoginScreen,
    DashboardScreen,
    CreditScreen,
    FootballScreen,
    MobileMoneyScreen,
    JackpotScreen,
} from '../modules';

export default createStackNavigator({
    LoginScreen,
    Main: {
        screen: createDrawerNavigator({
            DashboardScreen: {
                screen: createStackNavigator({
                    Home: {screen: DashboardScreen}
                }, {
                    navigationOptions: ({navigation}) => drawerStackNavigationOptions(navigation, 'Dashboard', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Dashboard', 'view-dashboard', MaterialCommunityIcons)
            },
            CreditScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: CreditScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Credit Cards', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Credit Cards', 'cards', MaterialCommunityIcons)
            },
            FootballScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: FootballScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Football', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Football', 'soccer-ball-o', FontAwesome)
            },
            JackpotScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: JackpotScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Jackpot', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Jackpot', 'casino', MaterialIcons)
            },
            MobileMoneyScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: MobileMoneyScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Mobile Money', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Mobile Money', 'cash-multiple', MaterialCommunityIcons)
            },
        }, {
            contentComponent: props => drawerContentComponents(props),
            contentOptions: {
                activeTintColor: Colors.accent,
                labelStyle: {fontSize: 16}
            }
        })
    }
}, {
    headerMode: 'none',
    initialRouteName: "LoginScreen",
    navigationOptions: {
        gesturesEnabled: false
    }
});
