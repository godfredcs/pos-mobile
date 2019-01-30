import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome, Entypo, MaterialCommunityIcons, MaterialIcons, Foundation } from '@expo/vector-icons';
import {
    drawerContentComponents,
    drawerStackNavigationOptions,
    drawerScreenNavigationOptions
} from './config';
import { Colors } from '../globals';

import {
    LoginScreen,
    LogoutScreen,
    AccountScreen,

    ItemScreen,
    SaleScreen,
    CreditScreen,
    JackpotScreen,
    FootballScreen,
    DashboardScreen,
    MobileMoneyScreen,

    AboutScreen
} from '../modules';

export default createStackNavigator({
    LoginScreen,
    Main: {
        screen: createDrawerNavigator({
            DashboardScreen: {
                screen: createStackNavigator({
                    Home: {screen: DashboardScreen}
                }, {
                    navigationOptions: ({ navigation }) => drawerStackNavigationOptions(navigation, 'Dashboard', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Dashboard', 'view-dashboard', MaterialCommunityIcons)
            },
            ItemScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: ItemScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Items', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Items', 'archive', Entypo)
            },
            SaleScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: SaleScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Sales', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Sales', 'burst-sale', Foundation)
            },
            CreditScreen: {
                screen: createBottomTabNavigator({
                    Cards: {
                        screen: createStackNavigator({
                            Home: {
                                screen: CreditScreen
                            }
                        }, {
                            navigationOptions: ({ navigation }) => drawerStackNavigationOptions(navigation, 'Credit Cards', Entypo)
                        })
                    },
                    Transfers: {
                        screen: createStackNavigator({
                            Home: {
                                screen: CreditScreen
                            }
                        }, {
                            navigationOptions: ({ navigation }) => drawerStackNavigationOptions(navigation, 'Credit Transfers', Entypo)
                        })
                    }
                }, {

                }),
                navigationOptions: drawerScreenNavigationOptions('Credits', 'cards', MaterialCommunityIcons)
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
            AccountScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: AccountScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'Account', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('Account', 'user', FontAwesome)
            },
            /* AboutScreen: {
                screen: createStackNavigator({
                    Home: {
                        screen: AboutScreen
                    }
                }, {
                    navigationOptions: ({
                        navigation
                    }) => drawerStackNavigationOptions(navigation, 'About', Entypo)
                }),
                navigationOptions: drawerScreenNavigationOptions('About', 'info-with-circle', Entypo)
            }, */
            LogoutScreen: {
                screen: LogoutScreen,
                navigationOptions: drawerScreenNavigationOptions('Log out', 'logout', MaterialCommunityIcons)
            }
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
