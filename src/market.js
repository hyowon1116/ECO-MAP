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

const Item = (title, price) => {
    return (
        <View style={styles.viewStyle}>
            <View>
                <ProfilePicture
                    isPicture={true}
                    requirePicture={require('./assets/leaf_icon.png')}
                    pictureStyle={styles.stampStyle}
                />
            </View>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={{flex: 1, marginRight: 20}}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => alert(`${title} 구매를 위해 ${price}포인트를 지불해야 합니다. 구매하시겠습니까?`)}
                >
                    <ProfilePicture
                        isPicture={true}
                        requirePicture={require('./assets/coin_icon.png')}
                        pictureStyle={styles.coinStyle}
                    />
                    <Text style={styles.priceStyle}>{price}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const StampTab = () => (
    <ScrollView>
        {Item('스탬프1', '100')}
        {Item('스탬프2', '200')}
        {Item('스탬프3', '300')}
        {Item('스탬프4', '400')}
        {Item('스탬프5', '500')}
        {Item('스탬프6', '600')}
        {Item('스탬프7', '700')}
        {Item('스탬프8', '800')}
        {Item('스탬프9', '900')}
    </ScrollView>
);

const ThemeTab = () => (
    <ScrollView>
        {Item('테마1', '100')}
        {Item('테마2', '200')}
        {Item('테마3', '300')}
        {Item('테마4', '400')}
        {Item('테마5', '500')}
        {Item('테마6', '600')}
        {Item('테마7', '700')}
        {Item('테마8', '800')}
        {Item('테마9', '900')}
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