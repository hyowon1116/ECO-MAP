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
        let color;
        
        if (rank === 1) {color = '#D5A11E'}
        else if (rank === 2) {color = '#A3A3A3'}
        else if (rank === 3) {color = '#CD7F32'}
        else {color = '#F1F1F1'}

        return (
            <View style={[styles.listStyle, {backgroundColor: color}]}>
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
                        <Text style={{color: '#FFFFFF'}}>순위</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text style={{color: '#FFFFFF'}}>닉네임</Text>
                    </View>
                    <View style={[styles.boxStyle, {marginRight: -20}]}>
                        <Text style={{color: '#FFFFFF'}}>기여도</Text>
                    </View>
                </View>
                <ScrollView style={{marginBottom: 40}}>
                    {this.RankList(1, '유저1', 150)}
                    {this.RankList(2, '유저2', 140)}
                    {this.RankList(3, '유저3', 130)}
                    {this.RankList(4, '유저4', 120)}
                    {this.RankList(5, '유저5', 110)}
                    {this.RankList(6, '유저6', 100)}
                    {this.RankList(7, '유저7', 90)}
                    {this.RankList(8, '유저8', 80)}
                    {this.RankList(9, '유저9', 70)}
                    {this.RankList(10, '유저10', 60)}
                    {this.RankList(11, '유저11', 50)}
                    {this.RankList(12, '유저12', 40)}
                    {this.RankList(13, '유저13', 30)}
                    {this.RankList(14, '유저14', 20)}
                    {this.RankList(15, '유저15', 10)}
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
        borderBottomWidth: 1
    },
    headerStyle: {
        height: 40,
        backgroundColor: '#023B02',
        borderTopWidth: 1
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