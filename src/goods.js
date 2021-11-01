/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Width = Dimensions.get('window').width / 2;

const Goods = (title, type, price, store, image, color) => {
    return (
        <TouchableOpacity
            style={[styles.boxStyle, {backgroundColor: color}]}
            onPress={() => Linking.openURL(store)}
        >
            <Image
                source={{uri: image}}
                style={styles.imageStyle}
            />
            <View style={styles.bottomStyle}>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 17}}>{title}</Text>
                </View>
                <View style={styles.infoStyle}>
                    <Text style={{fontSize: 12}}>{type}</Text>
                    <Text style={styles.priceStyle}>{price}<Text style={{fontSize: 12}}>원</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const BeautyTab = () => (
    <View style={{flex: 1}}>
        <ScrollView>
            <View style={styles.rowStyle}>
                {Goods(
                    '친환경 유기농 네이쳐 오가닉수건 150g 10장',
                    '생활/리빙',
                    '57,500',
                    'https://www.wallavu.com/shop/goodsView/0000012611',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/26/11/b_0000012611.gif?v=20210825094328',
                    '#EBECCA'
                )}
                {Goods(
                    '친환경 어린이 동물그림 오가닉 수건 150g 4장',
                    '생활/리빙',
                    '23,500',
                    'https://www.wallavu.com/shop/goodsView/0000012609',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/26/09/b_0000012609.gif?v=20210825094328',
                    '#CCDEC4'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '최강 부드러운화장솜 코튼&밤부 120매',
                    '화장솜/면봉',
                    '3,200',
                    'https://www.wallavu.com/shop/goodsView/0000006193',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/61/93/b_0000006193.gif?v=20210330112103',
                    '#CCDEC4'
                )}
                {Goods(
                    '시트러스향 마르세유 비누(사각형) 100g',
                    '클렌징폼/비누',
                    '4,900',
                    'https://www.wallavu.com/shop/goodsView/0000007788',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/77/88/b_0000007788.gif?v=20210713160714',
                    '#EBECCA'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '테라피컬렉션 나이트 스파 워터드롭 크림 50ml 나이트크림',
                    '크림',
                    '25,000',
                    'https://www.wallavu.com/shop/goodsView/0000011383',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/13/83/b_0000011383.gif?v=20210829091837',
                    '#EBECCA'
                )}
                {Goods(
                    '테라피컬렉션 모이스처 테라피 바디로션',
                    '바디로션',
                    '15,000',
                    'https://www.wallavu.com/shop/goodsView/0000011381',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/13/81/b_0000011381.gif?v=20210829091837',
                    '#CCDEC4'
                )}
            </View>
        </ScrollView>
        {/* <TouchableOpacity
            style={{backgroundColor: '#D7C9FF', alignItems: 'center'}}
            onPress={() => {}}
        >
            <Text style={{fontSize: 20, paddingVertical: 5}}>Analysis Result</Text>
        </TouchableOpacity> */}
    </View>
);

const FoodTab = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>친환경 음식 제품 페이지</Text>
    </View>
);

class GoodsScreen extends Component {
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
                    <Tab.Screen name='Beauty' component={BeautyTab} />
                    <Tab.Screen name='Food' component={FoodTab} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        height: Width + 95,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5
    },
    boxStyle: {
        width: Width - 10,
        borderWidth: 1,
        borderRadius: 10
    },
    imageStyle: {
        width: Width - 30,
        height: Width - 30,
        margin: 10,
        borderRadius: 10
    },
    bottomStyle: {
        height: 95,
        marginHorizontal: 10
    },
    infoStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    priceStyle: {
        color: '#FA3831',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default GoodsScreen;