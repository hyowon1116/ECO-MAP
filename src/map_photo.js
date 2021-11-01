/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width - 20;

class MapPhotoScreen extends Component {
    render() {
        const {params} = this.props.route;
        const uri = params.uri;

        return (
            <View style={styles.viewStyle}>
                <Image
                    source={{uri: uri}}
                    style={{width: Width, height: Width}}
                />
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