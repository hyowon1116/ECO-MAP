/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

class DrawerNotice extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
                    <View style={styles.boxStyle}>
                        <Text style={styles.textStyle}>앱의 안정성과 성능을 개선하고 각종 버그를 수정하였습니다.</Text>
                        <Text style={styles.dateStyle}>2021.10.25.</Text>
                    </View>
                    <View style={[styles.boxStyle, {marginBottom: 5}]}>
                        <Text style={styles.textStyle}>ECO-MAP 사용자분들께 공지사항을 전달하는 공간입니다. 앞으로 잘 부탁드려요~!</Text>
                        <Text style={styles.dateStyle}>2021.10.15.</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxStyle: {
        borderBottomWidth: 2,
        borderColor: '#CDCDCD',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    textStyle: {
        fontSize: 15,
        marginBottom: 7
    },
    dateStyle: {
        color: '#6B6B6B'
    }
})

export default DrawerNotice;