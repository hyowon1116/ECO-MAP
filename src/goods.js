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

const Goods = (title, store, image, type, price, color) => {
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
                    'https://www.wallavu.com/shop/goodsView/0000012611',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/26/11/b_0000012611.gif?v=20210825094328',
                    '생활/리빙', '57,500', '#EBECCA'
                )}
                {Goods(
                    '친환경 어린이 동물그림 오가닉 수건 150g 4장',
                    'https://www.wallavu.com/shop/goodsView/0000012609',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/26/09/b_0000012609.gif?v=20210825094328',
                    '생활/리빙', '23,500', '#CCDEC4'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '최강 부드러운화장솜 코튼&밤부 120매',
                    'https://www.wallavu.com/shop/goodsView/0000006193',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/61/93/b_0000006193.gif?v=20210330112103',
                    '화장솜/면봉', '3,200', '#CCDEC4'
                )}
                {Goods(
                    '시트러스향 마르세유 비누(사각형) 100g',
                    'https://www.wallavu.com/shop/goodsView/0000007788',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/77/88/b_0000007788.gif?v=20210713160714',
                    '클렌징폼/비누', '4,900', '#EBECCA'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '테라피컬렉션 나이트 스파 워터드롭 크림 50ml 나이트크림',
                    'https://www.wallavu.com/shop/goodsView/0000011383',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/13/83/b_0000011383.gif?v=20210829091837',
                    '크림', '25,000', '#EBECCA'
                )}
                {Goods(
                    '테라피컬렉션 모이스처 테라피 바디로션',
                    'https://www.wallavu.com/shop/goodsView/0000011381',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/01/13/81/b_0000011381.gif?v=20210829091837',
                    '바디로션', '15,000', '#CCDEC4'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '50:50 발란스 헤어컨디셔너 250ml',
                    'https://www.wallavu.com/shop/goodsView/0000009560',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/95/60/b_0000009560.gif?v=20201021140550',
                    '린스/컨디셔너', '14,900', '#CCDEC4'
                )}
                {Goods(
                    '스무스 실크 샴푸 710ml',
                    'https://www.wallavu.com/shop/goodsView/0000009544',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/95/44/b_0000009544.gif?v=20201021140550',
                    '샴푸', '21,900', '#EBECCA'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '라벤더향 마르세유 비누 (100g)',
                    'https://www.wallavu.com/shop/goodsView/0000007777',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/77/77/b_0000007777.gif?v=20201019173853',
                    '클렌징폼/비누', '4,900', '#EBECCA'
                )}
                {Goods(
                    '라일락향 마르세유 비누 (100g)',
                    'https://www.wallavu.com/shop/goodsView/0000007772',
                    'https://cdn.wallavu.com/data/sejong_data/images/product/00/00/00/77/72/b_0000007772.gif?v=20200827123018',
                    '클렌징폼/비누', '4,900', '#CCDEC4'
                )}
            </View>
        </ScrollView>
    </View>
);

const FoodTab = () => (
    <View style={{flex: 1}}>
        <ScrollView>
            <View style={styles.rowStyle}>
                {Goods(
                    '무농약 고령딸기(500g)',
                    'https://www.oasis.co.kr/product/detail/37856-1038667?categoryId=',
                    'https://www.oasis.co.kr:48581/product/37856/detail/detail_37856_0_0d73f810-3792-485d-b175-9e4544162da8.jpg',
                    '딸기', '13,500', '#EBECCA'
                )}
                {Goods(
                    '만석 유기농 백미 (10kg, 단일품종)',
                    'https://www.oasis.co.kr/product/detail/37063-1037758?categoryId=',
                    'https://www.oasis.co.kr:48581/product/37063/detail/detail_37063_0_17f6a23d-51c4-4810-a13f-38b1f2ab229c.jpg',
                    '쌀', '41,700', '#CCDEC4'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '가지 / 무농약 이상 (2입)',
                    'https://www.oasis.co.kr/product/detail/36901-1037565?categoryId=',
                    'https://www.oasis.co.kr:48581/product/36901/detail/detail_36901_0_1b257dcd-74e2-4f85-b0a8-51fcf58d3dcf.jpg',
                    '가지', '3,180', '#CCDEC4'
                )}
                {Goods(
                    '대파 / 무농약 이상 (300g)',
                    'https://www.oasis.co.kr/product/detail/36897-1037561?categoryId=',
                    'https://www.oasis.co.kr:48581/product/36897/detail/detail_36897_0_396cea3d-adc1-4777-ad17-f9b240cce2cf.jpg',
                    '대파', '1,750', '#EBECCA'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '유기농 쌀(10kg)',
                    'https://www.oasis.co.kr/product/detail/36140-1036606?categoryId=',
                    'https://www.oasis.co.kr:48581/product/36140/detail/detail_36140_0_73354691-7157-4eed-b024-3f4c1a826820.jpg',
                    '쌀', '42,000', '#EBECCA'
                )}
                {Goods(
                    '친환경 구운감자(185g)',
                    'https://www.oasis.co.kr/product/detail/35146-1035281?categoryId=',
                    'https://www.oasis.co.kr:48581/product/35146/detail/detail_35146_0_58853d64-82a5-4626-a26f-2c9ec2336e39.jpg',
                    '감자', '2,400', '#CCDEC4'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '유기농 깻잎 (40g)',
                    'https://www.oasis.co.kr/product/detail/16210-1013859?categoryId=',
                    'https://www.oasis.co.kr:48581/product/16210/detail/detail_16210_0_4cee8763-c9b7-4da7-9b28-cc7e95b1014e.jpg',
                    '깻잎', '1,450', '#CCDEC4'
                )}
                {Goods(
                    '친환경 자른미역 (200g)',
                    'https://www.oasis.co.kr/product/detail/291-222?categoryId=',
                    'https://www.oasis.co.kr:48581/product/291/detail/thumb_291a7c4966e-c098-45b0-a8c4-c36cca16e871.jpg',
                    '미역', '4,950', '#EBECCA'
                )}
            </View>
            <View style={styles.rowStyle}>
                {Goods(
                    '유기농 오분도미 (4kg, 단일품종)',
                    'https://www.oasis.co.kr/product/detail/1782-1593?categoryId=1',
                    'https://www.oasis.co.kr:48581/product/1782/detail/detail_1782_0_bc6512c3-44d0-413a-bacd-ebfd27712697.jpg',
                    '쌀', '19,530', '#EBECCA'
                )}
                {Goods(
                    '친환경 후레쉬가든 샐러드 (250g)',
                    'https://www.oasis.co.kr/product/detail/3433-5137?categoryId=',
                    'https://www.oasis.co.kr:48581/product/3433/detail/detail_3433_0_dd569e15-c708-4cb7-979d-84038c612b41.jpg',
                    '샐러드', '4,480', '#CCDEC4'
                )}
            </View>
        </ScrollView>
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