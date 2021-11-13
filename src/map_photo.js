/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
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
                <Text>{title} 인증샷</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MapPhotoScreen;