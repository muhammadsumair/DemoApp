import React, {Component} from 'react';
import { ScrollView, Text, View, Image, Platform, TouchableOpacity} from 'react-native';
import HomeStyle from "./HomeStyle";
import Chart from '../../components/chart/Chart';
import StarRating from "react-native-star-rating/StarRating";

class Home extends Component {
    render() {
        return (
            <ScrollView style={{flex:1, backgroundColor:'#27283a'}}>
                <View style={HomeStyle.mainContainer}>
                    <View style={HomeStyle.profileHeader}>
                        <Image source={require('../../assets/images/HeaderBg.png')}  style={HomeStyle.profileHeaderContainerImage}/>
                        <View style={HomeStyle.profileHeaderImageBox}>
                            <View style={HomeStyle.profileHeaderWrapper}>
                                <Image
                                    source={require('../../assets/images/ProfilePic.png')}
                                    borderRadius={(Platform.OS === 'ios') ? 100 / 2 :  100}
                                    style={HomeStyle.profileHeaderImage}/>
                            </View>
                        </View>
                        <View style={HomeStyle.profileText}>
                            <Text style={[HomeStyle.profileName]}>Anthony Martial</Text>
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
                        <Chart />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Home;
