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
    profileHeaderContainer: {
        alignItems: 'center',
        flex: 1

    },
    profileHeaderContainerImage: {
        width: width,
        height: 235,
        alignItems: 'center'
    },
    profileHeaderImageBox: {
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
    profileHeaderWrapper: {
        width:110,
        height: 110,
        borderRadius: (Platform.OS === 'ios') ? 100 / 2 : 100,
        backgroundColor: 'transparent',
        borderWidth: .5,
        borderColor: "#666779",
        alignItems:'center',
        justifyContent: 'center'
    },
    profileText: {
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
    list: {
        paddingHorizontal: 22,
        backgroundColor: '#efefef',
        marginBottom: -1
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor : '#bbbbbb',
        paddingVertical: 15
    },
    readMoreContainer: {
        flex: 1,
        alignItems: 'center'
    },
    listItemOverview: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor : '#bbbbbb',
        paddingVertical: 15
    },
    listDetails: {
        paddingHorizontal: 22,
        backgroundColor: '#fafafa'
    },
    listItemIcon: {
        fontSize: 20,
        color: '#333333',
        marginRight: 10,
        marginLeft: 5
    },
    listText: {
        fontSize: 13,
        color : '#2a2a2a', flex: 1
    },
    cornerText: {
        alignItems: 'flex-end',
        fontSize: 17,
        color: '#2a2a2a'
    },
    profileLinksContainer: {
        paddingHorizontal: 23,
        backgroundColor: '#fafafa'
    },
    profileLinksHeading: {
        paddingVertical: 18,
        color: '#2a2a2a',
        fontSize: 13
    },
    singleLink: {
        color: '#2a2a2a',
        fontSize: 13,
        paddingBottom: 19
    },
    footer: {
        flexDirection: 'row',
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#bbbbbb',
        marginHorizontal: 23,
        paddingVertical: 15
    }
})
