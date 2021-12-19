/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Geolocation from 'react-native-geolocation-service';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - Width;

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

class MapCameraScreen extends Component {

    TakePhoto = async (title) => {
        let latitude, longitude;

        requestPermissions(
            Geolocation.getCurrentPosition(
                (position) => {latitude = position.coords.latitude, longitude = position.coords.longitude},
                (error) => console.log(error.message),
                {enableHighAccuracy: true}
            )
        )
        
        const data = await this.camera.takePictureAsync({quality: 1, base64: true});
        this.props.navigation.navigate('Map_Photo', {'uri': data.uri, 'title': title, 'latitude': latitude, 'longitude': longitude});
    }

    render() {
        const {params} = this.props.route;
        const title = params.title;

        return (
            <View>
                <RNCamera
                    ref={ref => {this.camera = ref;}}
                    style={{width: Width, height: Width}}
                    captureAudio={false}
                />
                <View style={styles.viewStyle}>
                    <View style={styles.boxStyle}>
                        <Text style={styles.titleStyle}>{title} 인증샷</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => this.TakePhoto(title)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: Height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2'
    },
    boxStyle: {
        position: 'absolute',
        top: 10,
        width: '95%',
        height: 43,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#74BF60'
    }
})

export default MapCameraScreen;