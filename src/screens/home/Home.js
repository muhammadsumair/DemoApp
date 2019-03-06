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
                        <View style={{alignItems:'center', marginVertical: 20}}>
                            <TouchableOpacity style={{backgroundColor:'#fe0000', borderRadius:50, height: 30, width: 155, alignItems:'center', justifyContent: 'center',}}>
                                <Text style={{fontSize:15, color:'#ffff', fontWeight: 'bold'}}>View Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginVertical:10}}>
                        <View style={{flexDirection:'row', justifyContent:'center', marginHorizontal:20}}>
                            <View style={{marginHorizontal: 10, alignItems:'center', marginVertical:10, borderBottomWidth: 5, borderBottomColor:'green'}}>
                                <View style={{borderRadius: 50, height: 70, width:70, backgroundColor:'#fff'}}>

                                </View>
                                <Text>Revenue</Text>
                            </View>
                            <View style={{marginHorizontal: 10, alignItems:'center', marginVertical:10, borderBottomWidth: .5, borderBottomColor:'#fff'}}>
                                <View style={{borderRadius: 50, height: 70, width:70, backgroundColor:'#fff'}}>

                                </View>
                                <Text>Clients</Text>
                            </View>
                            <View style={{marginHorizontal: 10, alignItems:'center', marginVertical:10, borderBottomWidth: .5, borderBottomColor:'#fff'}}>
                                <View style={{borderRadius: 50, height: 70, width:70, backgroundColor:'#fff'}}>

                                </View>
                                <Text style={{marginBottom: 10}}>Notifications</Text>
                            </View>
                        </View>
                            <View style={{flex:1, backgroundColor: 'green',borderBottomWidth: .5, borderBottomColor:'#fff', marginTop: -10.5, marginHorizontal:10}}/>
                        </View>

                        <Chart />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Home;
