import React, {Component} from 'react';
import { ScrollView, Text, View, Image, ImageBackground, Platform, TouchableOpacity} from 'react-native';
import StarRating from "react-native-star-rating/StarRating";
import Icon from 'react-native-vector-icons/FontAwesome5';

//Styles
import HomeStyle from "./HomeStyle";

//Components
import Chart from '../../components/chart/Chart';

class Home extends Component {
    render() {
        return (
            <ScrollView style={HomeStyle.mainContainer}>
                <View style={HomeStyle.profileHeader}>

                    <ImageBackground
                        source={require('../../assets/images/HeaderBg.png')}
                        style={HomeStyle.profileHeaderContainer}>
                        <View style={HomeStyle.profileIconsContainer}>
                            <TouchableOpacity style={HomeStyle.qrcode}>
                                <Icon name={'qrcode'} size={28} />
                            </TouchableOpacity>
                            <TouchableOpacity style={HomeStyle.share}>
                                <Icon name={'share-alt'} color={'#ffffff'} size={28} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={HomeStyle.profileImageContainer}>
                        <View style={HomeStyle.profileImageBox}>
                            <Image
                                source={require('../../assets/images/ProfilePic.png')}
                                borderRadius={(Platform.OS === 'ios') ? 100 / 2 :  100}
                                style={HomeStyle.profileHeaderImage}/>
                            <TouchableOpacity style={HomeStyle.instaContainer}>
                                <Image
                                    source={require('../../assets/images/instagram.png')}
                                    style={HomeStyle.instaIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={HomeStyle.profileDetailContainer}>
                        <Text style={HomeStyle.profileName}>Anthony Martial</Text>
                        <Text style={HomeStyle.profileDetail}>Barber With 9 Year of Experience</Text>
                        <View style={HomeStyle.ratingContainer}>
                            <StarRating
                                disabled={false}
                                starSize={15}
                                maxStars={5}
                                rating={3.5}
                                fullStarColor={'#eb8b10'}
                                emptyStarColor={'#a15e31'}
                            />
                            <Text style={HomeStyle.reviews}>(17 Reviews)</Text>
                        </View>
                    </View>

                    <View style={HomeStyle.profileDetailButtonContainer}>
                        <TouchableOpacity style={HomeStyle.profileDetailButton}>
                            <Text style={HomeStyle.profileDetailButtonText}>View Profile</Text>
                        </TouchableOpacity>
                    </View>

                    <Chart />
                </View>
            </ScrollView>
        );
    }
}

export default Home;
