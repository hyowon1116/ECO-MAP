/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, TextInput, View, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Postcode from '@actbase/react-daum-postcode';

async function requestPermissions(fun) {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            fun;
        }
    }
    if (Platform.OS === 'ios') {
        const auth = await Geolocation.requestAuthorization("whenInUse");
        if (auth === 'granted') {
            fun;
        }
    }
}

class MapSearchScreen extends Component {

    CurrentPosition = () => {
        Geolocation.getCurrentPosition(
            (position) => alert(`위도: ${position.coords.latitude}\n경도: ${position.coords.longitude}`),
            (error) => console.log(error.message),
            {enableHighAccuracy: true}
        )
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>LOCATION</Text>
                <View style={styles.boxStyle}>
                    <TouchableOpacity
                        style={styles.touchStyle}
                        onPress={() => requestPermissions(this.CurrentPosition())}
                    >
                        <Image
                            source={require('./assets/gps_icon.png')}
                            resizeMode='center'
                            style={{width: 18, height: 18}}
                        />
                        <Text style={{fontSize: 15}}> 현재 위치</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBox}>
                    <Ionicons name='search' size={30} style={styles.searchIcon} />
                    <TextInput
                        placeholder='장소, 주소 검색'
                        style={styles.searchText}
                    />
                </View>
                <ScrollView style={styles.scrollStyle}></ScrollView>
                {/* <Postcode
                    style={{width: '100%', height: '100%'}}
                    onSelected={(data) => {
                        console.log(data.roadAddress)
                        this.props.navigation.navigate('Map_Menu1')
                    }}
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: '900',
        marginTop: 40
    },
    boxStyle: {
        padding: 10,
        paddingRight: 20,
        alignSelf: 'flex-end'
    },
    touchStyle: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchBox: {
        width: '100%',
        height: 55,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 30,
        borderStyle: 'solid',
        borderColor: '#808080',
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchIcon: {
        flex: 0.1,
        marginLeft: 7
    },
    searchText: {
        flex: 1,
        fontSize: 17,
        marginHorizontal: 7
    },
    scrollStyle: {
        width: '90%',
        backgroundColor: '#808080',
        opacity: 0.2,
        borderWidth: 2,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#000000',
        marginBottom: 30
    }
})

export default MapSearchScreen;