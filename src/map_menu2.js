/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

class MapMenu1Screen extends Component {

    TouchButton(route) {
        return (
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate('Map_Camera', {'title': route})}
            >
                <Text style={styles.textStyle}>{route}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('./assets/logo_icon.png')}
                    imageStyle={{opacity: 0.3}}
                    resizeMode='cover'
                    style={styles.backgroundStyle}
                >
                    <Text style={styles.titleStyle}>CONTRIBUTION</Text>
                    <View style={styles.viewStyle}>
                        <View style={styles.boxStyle}>
                            {this.TouchButton('텀블러 사용')}
                            {this.TouchButton('분리수거 실천')}
                            {this.TouchButton('WALK/BIKE')}
                            {this.TouchButton('Switch OFF')}
                        </View>
                        <View style={styles.boxStyle}>
                            {this.TouchButton('잔반 ZERO')}
                            {this.TouchButton('빨대 FREE')}
                            {this.TouchButton('비건 실천')}
                            <TouchableOpacity
                                style={[styles.buttonStyle, {backgroundColor: '#CFDDCB'}]}
                                onPress={() => alert('CUSTOMIZE')}
                            >
                                <Text style={styles.textStyle}>CUSTOMIZE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: '900',
        paddingVertical: 40
    },
    viewStyle: {
        width: '95%',
        height: '70%',
        flexDirection: 'row'
    },
    boxStyle: {
        flex: 1,
        marginHorizontal: 7,
        justifyContent: 'space-around'
    },
    buttonStyle: {
        width: '100%',
        padding: 13,
        backgroundColor: '#A4C099',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#808080',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default MapMenu1Screen;