/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

class MapAddScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('./assets/logo_icon.png')}
                    imageStyle={{opacity: 0.3}}
                    resizeMode='cover'
                    style={styles.backgroundStyle}
                >
                    <FAB label='Pave the Way for ECO'
                        color='black'
                        uppercase={false}
                        style={[styles.fabStyle, {backgroundColor: '#EBECCA'}]}
                        onPress={() => this.props.navigation.navigate('Map_Menu1')}
                    />
                    <FAB label='Upload ECO Stamp'
                        color='black'
                        uppercase={false}
                        style={[styles.fabStyle, {backgroundColor: '#CCDEC4'}]}
                        onPress={() => this.props.navigation.navigate('Map_Menu2')}
                    />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    fabStyle: {
        width: '90%',
        opacity: 0.9
    }
})

export default MapAddScreen;