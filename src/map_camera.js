/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height - Width;

class MapCameraScreen extends Component {

    TakePhoto = async () => {
        if (this.camera) {
            const data = await this.camera.takePictureAsync({quality: 0.5, base64: true});
            this.props.navigation.navigate('Map_Photo', {'uri': data.uri});
        }
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
                        onPress={() => this.TakePhoto(this)}
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