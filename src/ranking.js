/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

class RankingScreen extends Component {

    RankList(rank, name, score) {
        return (
            <View style={styles.listStyle}>
                <View style={[styles.boxStyle, {marginLeft: -20}]}>
                    <Text style={styles.textStyle}>{rank}</Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text style={styles.textStyle}>{name}</Text>
                </View>
                <View style={[styles.boxStyle, {marginRight: -20}]}>
                    <Text style={styles.textStyle}>{score}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                <View style={[styles.listStyle, styles.headerStyle]}>
                    <View style={[styles.boxStyle, {marginLeft: -20}]}>
                        <Text>순위</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text>닉네임</Text>
                    </View>
                    <View style={[styles.boxStyle, {marginRight: -20}]}>
                        <Text>기여도</Text>
                    </View>
                </View>
                <ScrollView style={{marginBottom: 40}}>
                    {this.RankList(1, 'ECO1', 100)}
                    {this.RankList(2, 'ECO2', 100)}
                    {this.RankList(3, 'ECO3', 100)}
                    {this.RankList(4, 'ECO4', 100)}
                    {this.RankList(5, 'ECO5', 100)}
                    {this.RankList(6, 'ECO6', 100)}
                    {this.RankList(7, 'ECO7', 100)}
                    {this.RankList(8, 'ECO8', 100)}
                    {this.RankList(9, 'ECO9', 100)}
                    {this.RankList(10, 'ECO10', 100)}
                    {this.RankList(11, 'ECO11', 100)}
                    {this.RankList(12, 'ECO12', 100)}
                    {this.RankList(13, 'ECO13', 100)}
                    {this.RankList(14, 'ECO14', 100)}
                    {this.RankList(15, 'ECO15', 100)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FCF6D4',
        borderBottomWidth: 1
    },
    headerStyle: {
        height: 40,
        backgroundColor: '#CBF5BF',
        borderTopWidth: 1,
        borderColor: '#184D09'
    },
    boxStyle: {
        flex: 1,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default RankingScreen;