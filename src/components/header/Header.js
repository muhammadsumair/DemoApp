import React from 'react';
import { Text, View, Image, Platform, TouchableOpacity} from 'react-native';
import CompanyProfileStyle from './HeaderStyle';
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
                            borderRadius={(Platform.OS === 'ios') ? 100 / 2 :  100}
                            style={CompanyProfileStyle.profileHeaderImage}/>
                    </View>
                </View>
                <View style={CompanyProfileStyle.profileText}>
                    <Text style={[CompanyProfileStyle.profileName]}>Anthony Martial</Text>
                    <Text style={{color: '#fcfeff', fontSize:16, marginVertical: 15}}>Barber With 9 Year of Experience</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <StarRating
                        disabled={false}
                        starSize={15}
                        maxStars={5}
                        rating={3.5}
                        fullStarColor={'#eb8b10'}
                        emptyStarColor={'#a15e31'}

                    />
                        <Text style={{color: '#fcfeff', marginHorizontal: 5}}>(17 Reviews)</Text>
                    </View>
                </View>
                <View style={{alignItems:'center', marginTop: 20}}>
                    <TouchableOpacity style={{backgroundColor:'#fe0000', borderRadius:50, height: 30, width: 155, alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize:15, color:'#ffdcec', fontWeight: 'bold'}}>View Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

export default Header;
