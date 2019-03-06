import React, {Component} from 'react';
import {Text, View, Image, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import Header from "../../components/header/Header";

class Home extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }


    render() {
        return (
           <View style={{flex:1, backgroundColor:'#27283a'}}>
               <Header/>
           </View>
        );
    }
}

export default Home;
