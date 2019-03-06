import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Components
import Home from "./screens/home/Home";
import Settings from "./screens/settings/Settings";

export const Tabs = createBottomTabNavigator({
    Calender: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'user'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'user'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    },
    Reviews: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'user'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'user'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    }
},{
    tabBarOptions:{
        activeTintColor:'#ce1527',
        inactiveTintColor:'#b9b9b9',
        showLabel: true,
    }
});

