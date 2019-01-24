import React from 'react';
import { Text, View} from 'react-native';
import HeaderStyle from './HeaderStyle';

const Header = (props) => {
    return (
        <View style={HeaderStyle.mainCont}>
            <Text style={HeaderStyle.textStyle}>{props.title}</Text>
        </View>

    );
};

export default Header;