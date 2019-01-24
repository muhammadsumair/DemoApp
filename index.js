/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

export default class Main extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent(appName, () => Main);
