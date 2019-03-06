import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Components
import Home from "./screens/home/Home";
import Settings from "./screens/settings/Settings";

export const Tabs = createBottomTabNavigator({
    Calender: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'home'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'calendar'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    },
    Reviews: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'heart'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: (f) => <Icon name={'cogs'} color={ f.focused ? f.tintColor : '#b9b9b9'} solid size={22} />
        }
    }
},{
    tabBarOptions:{
        activeTintColor:'#ce1527',
        inactiveTintColor:'#b9b9b9',
        showLabel: true,
    }
});

