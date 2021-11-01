/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

class DrawerQna extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
                    <View style={styles.boxStyle}>
                        <Text style={styles.question}>1. 다른 사용자의 랭킹이 보이지 않아요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text style={styles.question}>2. 다른 사용자의 사진이 보이지 않아요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text style={styles.question}>3. 현재 위치가 다른 장소로 표시되고 있어요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text style={styles.question}>4. 에코맵 경로가 정확하지 않아요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text style={styles.question}>5. 포인트가 증가하지 않아요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
                    </View>
                    <View style={styles.boxStyle}>
                        <Text style={styles.question}>6. 친환경 제품 목록이 보이지 않아요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
                    </View>
                    <View style={[styles.boxStyle, {marginBottom: 5}]}>
                        <Text style={styles.question}>7. 다른 기기와의 연동이 원활하지 않아요.</Text>
                        <Text style={styles.answer}>ECO-MAP의 안정성과 성능의 향상을 위해 끊임없이 노력하고 있습니다. 빠른 시일 내에 해당 문제점을 해결하겠습니다.</Text>
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
    question: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 7
    },
    answer: {
        fontSize: 15,
        marginLeft: 20
    }
})

export default DrawerQna;