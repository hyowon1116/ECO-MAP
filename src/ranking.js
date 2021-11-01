/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class RankingScreen extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>친환경 랭킹 페이지</Text>
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

export default RankingScreen;