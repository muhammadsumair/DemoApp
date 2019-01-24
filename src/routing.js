import React from 'react';
import { TabNavigator, StackNavigator  } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Home from "./home/Home";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Header from "./header/Header";
import Icon from 'react-native-vector-icons/Octicons';

export const TabNav = TabNavigator({
    'Home': {
        screen: Home,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header title="Home" leftHandler={() => navigation.goBack(null)}/>
            },
            tabBarIcon: ({tintColor, focused}) => {
                return <Icon name={'home'} color={ tintColor } style={styles.icon}/>
            }
        }
    },
    'Cart': {
        screen: Cart,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header title="Cart" leftHandler={() => navigation.goBack(null)}/>
            },
            tabBarIcon: ({tintColor, focused}) => {
                return <Icon name={'three-bars'} color={ tintColor } style={styles.icon}/>
            }
        }
    },
    'Profile': {
        screen: Profile,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header isProfile={true} title="Profile" leftHandler={() => navigation.goBack(null)}/>
            },
            tabBarIcon: ({tintColor, focused}) => {
                return <Icon name={'person'} color={ tintColor } style={styles.icon}/>
            }
        }
    }
},{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: false,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        indicatorStyle: {
            opacity: 0,
        },
        style: {
            backgroundColor: '#7E6044',
            paddingHorizontal: 50
            // elevation: 8,
            // shadowOpacity: 0,
        },

        activeTintColor: '#2E4847',
        inactiveTintColor:'#415049',
        pressColor: '#2E4847',

    }
});

export const Main = StackNavigator ({
    MainTab: {
        screen: TabNav,
    }
});

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
    }
});
