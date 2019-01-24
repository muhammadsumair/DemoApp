import React, {Component} from 'react';
import {ImageBackground, Text, View} from 'react-native';

class Profile extends Component {
    render() {
        return (
            <ImageBackground source={require('../../src/images/bg.jpg')} style={{flex: 1, alignItems: 'center'}}>

            </ImageBackground>
        );
    }
}

export default Profile;