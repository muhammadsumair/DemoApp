import { StyleSheet, Dimensions, Platform } from 'react-native'

let {width, height} =  Dimensions.get('window');

export default HomeStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    profileHeader: {
        backgroundColor: '#27283a',
        flex: 1,
        position: 'relative'
    },
    profileIconsContainer: {
        flex:1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 60
    },
    qrcode: {
        flex: 0.5
    },
    share: {
        flex: 0.5, alignItems: 'flex-end'
    },
    profileHeaderContainer: {
        width,
        height: 235,
        alignItems: 'center'
    },
    profileImageContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 180,
        left: 0,
        right: 0,
        flex: 1,
        zIndex: 1,
        borderRadius: (Platform.OS === 'ios') ? 100 / 2 : 100
    },
    profileHeaderImage: {
        width: 98,
        height: 98,
        borderRadius: (Platform.OS === 'ios') ? 100 / 2 : 100,
        borderWidth: 1,
        borderColor: "#2a2a2a"
    },
    profileImageBox: {
        width:110,
        height: 110,
        borderRadius: (Platform.OS === 'ios') ? 100 / 2 : 100,
        backgroundColor: 'transparent',
        borderWidth: .5,
        borderColor: "#666779",
        alignItems:'center',
        justifyContent: 'center'
    },
    instaContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 70,
        left: 70,
        zIndex: 1,
        borderRadius: (Platform.OS === 'ios') ? 100 / 2 : 100,
        backgroundColor: '#fff'
    },
    instaIcon: {
        // borderRadius: (Platform.OS === 'ios') ? 100 / 2 : 100,
        width: 20,
        height: 20
    },
    profileDetailContainer: {
        paddingTop: 50,
        backgroundColor: '#27283a',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 5
    },
    profileName: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#fff'
    },
    profileDetail: {
        color: '#fcfeff',
        fontSize:16,
        marginVertical: 15
    },
    ratingContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviews: {
        color: '#fcfeff',
        marginHorizontal: 5
    },
    profileDetailButtonContainer: {
        flex: 1,
        alignItems:'center'
    },
    profileDetailButton: {
        alignItems:'center',
        marginTop: 20,
        backgroundColor:'#fe0000',
        borderRadius:50,
        height: 30,
        width: 155,
        justifyContent: 'center'
    },
    profileDetailButtonText: {
        fontSize:15,
        color:'#ffdcec',
        fontWeight: 'bold'
    }
})
