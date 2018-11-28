import React from 'react';
import { TouchableOpacity, View, ScrollView, Text, Platform } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Colors } from '../globals';

const ISIOS = Platform.OS === 'ios';

export const stackScreenOptions = (navigation, title) => {
    if (navigation.state.params && navigation.state.params.title) {
        title = navigation.state.params.title;
    }

    return {
        title,
        headerTitle: title
    }
}

// Function to render navigation options for stackNavigators inside the drawer Navigator.
export const drawerStackNavigationOptions = (navigation, title, IconFamily) => ({
    headerMode: 'float',
    title,
    headerTitle: title,
    headerTitleStyle: { fontSize: 22, color: Colors.tertiary },
    headerBackTitleStyle: { color: '#FFF' },
    headerStyle: { backgroundColor: Colors.accent, borderBottomWidth: 0 },
    headerRight: (
        <TouchableOpacity style={{ paddingRight: 20 }} onPress={ () => navigation.openDrawer() }>
            <IconFamily name="menu" size={ 24 } color={ Colors.tertiary } />
        </TouchableOpacity>
    )
});

export const drawerScreenNavigationOptions = (drawerLabel, iconName, IconFamily, size=24) => ({
    drawerLabel,
    drawerLockMode: ISIOS ? 'locked-closed' : 'unlocked',
    drawerIcon: ({ tintColor }) => <IconFamily name={ iconName } size={ size } color={ tintColor } />
});

export const drawerContentComponents = props => (
    <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: Colors.accent, paddingVertical: 50, alignItems: 'center' }}>
            <Text style={{ color: Colors.tertiary, paddingTop: 10, fontSize: 50, fontWeight: '600' }}>
                POS
            </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
            <DrawerItems { ...props } />
        </ScrollView>
    </View>
);
