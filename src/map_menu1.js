/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, TextInput, View, ImageBackground, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MapMenu1Screen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('./assets/logo_icon.png')}
                    imageStyle={{opacity: 0.3}}
                    resizeMode='cover'
                    style={styles.backgroundStyle}
                >
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>출발</Text>
                        <View style={styles.searchBox}>
                            <Ionicons name='search' size={30} style={styles.searchIcon} />
                            <TextInput
                                placeholder='출발지 입력'
                                style={styles.searchText}
                                onPressIn={() => this.props.navigation.navigate('Map_Search')}
                            />
                        </View>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>도착</Text>
                        <View style={styles.searchBox}>
                            <Ionicons name='search' size={30} style={styles.searchIcon} />
                            <TextInput
                                placeholder='도착지 입력'
                                style={styles.searchText}
                                onPressIn={() => this.props.navigation.navigate('Map_Search')}
                            />
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
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    viewStyle: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10
    },
    searchBox: {
        width: '80%',
        height: 55,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#808080',
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchIcon: {
        flex: 0.15,
        marginLeft: 7
    },
    searchText: {
        flex: 1,
        fontSize: 17,
        marginHorizontal: 7
    }
})

export default MapMenu1Screen;