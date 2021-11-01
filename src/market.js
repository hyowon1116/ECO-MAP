/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class MarketScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.headerStyle}>
                    <Text style={{fontSize: 18}}>보유 포인트: </Text>
                    <Text style={styles.scoreStyle}>100</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text>포인트 마켓 페이지</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#DCF5E8',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#474747',
        padding: 15
    },
    scoreStyle: {
        color: '#005200',
        fontSize: 18,
        fontWeight: '900'
    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MarketScreen;