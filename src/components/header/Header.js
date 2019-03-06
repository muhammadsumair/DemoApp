import React from 'react';
import { Text, View, Image, Platform} from 'react-native';
import CompanyProfileStyle from './HeaderStyle';
import Chart from '../chart/Chart';
import StarRating from "react-native-star-rating/StarRating";

const Header = (props) => {
    return (
        <View style={CompanyProfileStyle.mainContainer}>
            <View style={CompanyProfileStyle.profileHeader}>
                <Image source={require('../../assets/images/HeaderBg.png')}  style={CompanyProfileStyle.profileHeaderContainerImage}/>
                <View style={CompanyProfileStyle.profileHeaderImageBox}>
                    <View style={CompanyProfileStyle.profileHeaderWrapper}>
                        <Image
                            source={require('../../assets/images/ProfilePic.png')}
                            // indicator={ProgressBar}
                            borderRadius={(Platform.OS === 'ios') ? 100 / 2 :  100}
                            style={CompanyProfileStyle.profileHeaderImage}/>
                    </View>
                </View>
                <View style={CompanyProfileStyle.profileText}>
                    <Text style={[CompanyProfileStyle.profileName]}>Anthony Martial</Text>
                    <Text style={{color: '#fcfeff', fontSize:16, marginVertical: 15}}>Barber With 9 Year of Experience</Text>
                    <View style={{flexDirection: 'row'}}>
                    <StarRating
                        disabled={false}
                        starSize={25}
                        maxStars={5}
                        rating={3.5}/>
                        <Text>(17 Reviews)</Text>
                    </View>
                </View>
                <Chart />
            </View>
        </View>

    );
};

export default Header;
