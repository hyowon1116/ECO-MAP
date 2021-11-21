/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import MapSearchScreen from './map_search';

const Width = Dimensions.get('window').width - 100;

class MapPhotoScreen extends Component {
    render() {
        const {params} = this.props.route;
        const uri = params.uri;
        const title = params.title;

        return (
            <View style={styles.viewStyle}>
                <Image
                    source={{uri: uri}}
                    style={{width: Width, height: Width}}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => this.props.navigation.dispatch(
                        CommonActions.reset({
                            routes: [
                                {name: 'Main', params: {}},
                                {name: 'Map_Add', params: {}},
                                {name: 'Map_Menu2', params: {}}
                            ]
                        }),
                        alert('인증 완료')
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