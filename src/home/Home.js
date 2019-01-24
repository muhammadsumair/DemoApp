import React, {Component} from 'react';
import {Text, View, Image, FlatList, ImageBackground, TouchableOpacity} from 'react-native';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            data: [
                {productImage: require('../../src/images/img1.jpeg')},
                {productImage: require('../../src/images/img2.jpeg')},
                {productImage: require('../../src/images/img3.jpeg')},
                {productImage: require('../../src/images/img4.jpeg')},
                ]
        }
    }

    _renderItem = ({item, index}) => {
        // console.warn(item.productImage)
        return(
            <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10, marginTop: 40}}>
                <Image style={{ borderRadius:10 }} source={item.productImage}/>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <ImageBackground source={require('../../src/images/bg.jpg')} style={{flex: 1, alignItems: 'center'}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    horizontal={false}
                    numColumns={2}
                />
            </ImageBackground>
        );
    }
}

export default Home;