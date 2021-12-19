/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const Width = Dimensions.get('window').width - 100;

class MapPhotoScreen extends Component {
    render() {
        let text;
        const {params} = this.props.route;
        const uri = params.uri;
        const title = params.title;
        const latitude = params.latitude;
        const longitude = params.longitude;

        if (latitude > 0) {text = `위도 ${latitude}, 경도 ${longitude}`;}
        else {text = '위치 정보를 불러오지 못했습니다. 재촬영 부탁드립니다.';}

        return (
            <View style={styles.viewStyle}>
                <Image
                    source={{uri: uri}}
                    style={{width: Width, height: Width}}
                />
                <Text>{text}</Text>
                <TouchableOpacity
                    style={latitude ? styles.buttonStyle : [styles.buttonStyle, {backgroundColor: '#4D6878'}]}
                    disabled={!latitude}
                    onPress={() => this.props.navigation.dispatch(
                        CommonActions.reset({
                            routes: [
                                {name: 'Main', params: {'latitude': latitude, 'longitude': longitude}},
                                {name: 'Map_Add', params: {'latitude': latitude, 'longitude': longitude}},
                                {name: 'Map_Menu2', params: {}}
                            ]
                        })
                    )}
                >
                    <Text style={styles.titleStyle}>{title} 인증 완료</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        width: Width,
        padding: 13,
        marginTop: 10,
        backgroundColor: '#C7EAFF',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#808080',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default MapPhotoScreen;