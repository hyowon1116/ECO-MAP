/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfilePicture from 'react-native-profile-picture';

const Tab = createMaterialTopTabNavigator();

let stamp1 = require('./assets/recycle_icon.png');
let stamp2 = require('./assets/leaf_icon.png');
let stamp3 = require('./assets/leaf2_icon.png');
let stamp4 = require('./assets/leaf3_icon.png');
let stamp5 = require('./assets/flower_icon.png');
let stamp6 = require('./assets/flower2_icon.png');
let stamp7 = require('./assets/tree_icon.png');
let stamp8 = require('./assets/tree2_icon.png');
let stamp9 = require('./assets/tree3_icon.png');
let theme1 = require('./assets/theme1.png');
let theme2 = require('./assets/theme2.png');
let theme3 = require('./assets/theme3.png');
let theme4 = require('./assets/theme4.png');
let theme5 = require('./assets/theme5.png');
let theme6 = require('./assets/theme6.png');
let theme7 = require('./assets/theme7.png');
let theme8 = require('./assets/theme8.png');
let theme9 = require('./assets/theme9.png');

const Item = (title, price, stamp, pay) => {
    return (
        <View style={styles.viewStyle}>
            <View>
                <ProfilePicture
                    isPicture={true}
                    requirePicture={stamp}
                    pictureStyle={styles.stampStyle}
                />
            </View>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={{flex: 1, marginRight: 20}}>
                <TouchableOpacity
                    style={pay ? [styles.buttonStyle, styles.offStyle] : styles.buttonStyle}
                    disabled={pay}
                    onPress={() => alert(`[${title}] 구매를 위해 ${price} 포인트를 지불해야 합니다. 구매하시겠습니까?`)}
                >
                    <ProfilePicture
                        isPicture={true}
                        requirePicture={require('./assets/coin_icon.png')}
                        pictureStyle={styles.coinStyle}
                    />
                    <Text style={pay ? {color: '#000000'} : styles.priceStyle}>{price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const StampTab = () => (
    <ScrollView>
        {Item('재활용 스탬프', '100', stamp1, 1)}
        {Item('나뭇잎 스탬프1', '100', stamp2, 1)}
        {Item('나뭇잎 스탬프2', '200', stamp3, 0)}
        {Item('나뭇잎 스탬프3', '300', stamp4, 0)}
        {Item('꽃 스탬프1', '400', stamp5, 0)}
        {Item('꽃 스탬프2', '500', stamp6, 0)}
        {Item('나무 스탬프1', '600', stamp7, 0)}
        {Item('나무 스탬프2', '700', stamp8, 0)}
        {Item('나무 스탬프3', '800', stamp9, 0)}
    </ScrollView>
);

const ThemeTab = () => (
    <ScrollView>
        {Item('테마1', '100', theme1, 1)}
        {Item('테마2', '100', theme2, 0)}
        {Item('테마3', '200', theme3, 0)}
        {Item('테마4', '200', theme4, 0)}
        {Item('테마5', '200', theme5, 0)}
        {Item('테마6', '300', theme6, 0)}
        {Item('테마7', '300', theme7, 0)}
        {Item('테마8', '400', theme8, 0)}
        {Item('테마9', '500', theme9, 0)}
    </ScrollView>
);

class MarketScreen extends Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarIndicatorStyle: {backgroundColor: '#008000'},
                        tabBarActiveTintColor: '#008000',
                        tabBarInactiveTintColor: '#9E9E9E',
                        tabBarPressColor: '#90EE90',
                        tabBarLabelStyle: {fontSize: 15}
                    }}
                >
                    <Tab.Screen name='Stamp' component={StampTab} />
                    <Tab.Screen name='Theme' component={ThemeTab} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    stampStyle: {
        width: 70,
        height: 70,
        margin: 10
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    buttonStyle: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#008000',
        borderRadius: 20,
        padding: 8
    },
    offStyle: {
        backgroundColor: '#646664'
    },
    coinStyle: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    priceStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});

export default MarketScreen;