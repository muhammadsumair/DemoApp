import React, {Component} from 'react';
import { ScrollView, Text, View, Image, ImageBackground, Platform, TouchableOpacity} from 'react-native';
import StarRating from "react-native-star-rating/StarRating";
import Icon from 'react-native-vector-icons/FontAwesome5';

//Styles
import HomeStyle from "./HomeStyle";

//Components
import Chart from '../../components/chart/Chart';

class Home extends Component {
    state = {
        activeIndex: 0
    };

    render() {
        const { activeIndex } = this.state;

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

                    <View style={{marginVertical:10}}>
                        <View style={HomeStyle.tabsContainer}>
                            <View style={[HomeStyle.tabContainer, activeIndex === 0 && HomeStyle.tabActiveContainer]}>
                                <View style={[HomeStyle.tabIconContainer, activeIndex === 0 && HomeStyle.tabActiveIconContainer]}>
                                    <TouchableOpacity onPress={() => this.setState({ activeIndex: 0})}>
                                        <Icon name={'hand-holding-usd'} color={`${activeIndex === 0 ? '#1DA218' : '#696b78'}`} size={40} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={[activeIndex === 0 ? HomeStyle.tabTextActive : HomeStyle.tabText]}>Revenue</Text>
                            </View>
                            <View style={[HomeStyle.tabContainer, activeIndex === 1 && HomeStyle.tabActiveContainer]}>
                                <View style={[HomeStyle.tabIconContainer, activeIndex === 1 && HomeStyle.tabActiveIconContainer]}>
                                    <TouchableOpacity onPress={() => this.setState({ activeIndex: 1})}>
                                        <Icon name={'users'} color={`${activeIndex === 1 ? '#1DA218' : '#696b78'}`} size={40} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={[activeIndex === 1 ? HomeStyle.tabTextActive : HomeStyle.tabText]}>Clients</Text>
                            </View>
                            <View style={[HomeStyle.tabContainer, activeIndex === 2 && HomeStyle.tabActiveContainer]}>
                                <View style={[HomeStyle.tabIconContainer, activeIndex === 2 && HomeStyle.tabActiveIconContainer]}>
                                    <TouchableOpacity onPress={() => this.setState({ activeIndex: 2})}>
                                        <Icon name={'bell'} color={`${activeIndex === 2 ? '#1DA218' : '#696b78'}`} size={40} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={[activeIndex === 2 ? HomeStyle.tabTextActive : HomeStyle.tabText]}>Notifications</Text>
                            </View>
                        </View>
                    </View>
                    <Chart />
                </View>
            </ScrollView>
        );
    }
}

export default Home;
