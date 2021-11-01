/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Mailer from 'react-native-mail';
import LinearGradient from 'react-native-linear-gradient';
import ProfilePicture from 'react-native-profile-picture';

const Profile = require('./assets/logo.jpg');
const Name = 'ECO';

class SlideDrawer extends Component {
    
    TouchDrawer(route) {
        return (
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    this.props.navigation.dispatch(
                        CommonActions.navigate({
                            name: route,
                            params: {}
                        })
                    )
                }}
            >
                <Text style={styles.textStyle}>{route}</Text>
                <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>〉</Text>
            </TouchableOpacity>
        )
    }
    
    sendMail = () => {
        Mailer.mail({
            subject: '[ECO-MAP] 1:1 문의',
            recipients: ['eco_map@gmail.com'],
            isHTML: true
        }, (error, event) => {
            Alert.alert(
                error, event, {cancelable: true}
            )
        })
    }

    render() {
        return (
            <ScrollView backgroundColor='#46633B'>
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#264A1A', '#69A242', '#9EE761']}
                >
                    <View style={styles.viewStyle}>
                        <View style={{flex: 0.6, margin: 35}}>
                            <ProfilePicture
                                isPicture={true}
                                requirePicture={Profile}
                                pictureStyle={styles.profileStyle}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.nameStyle}>{Name}</Text>
                                <Text style={[styles.nameStyle, {fontWeight: 'normal'}]}> 님</Text>
                            </View>
                            <Text style={styles.userStyle}>레벨1 씨앗</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', paddingBottom: 40}}>
                        <Text style={styles.userStyle}>사용 중인 이용권이 없습니다.</Text>
                    </View>
                </LinearGradient>
                <View style={{paddingVertical: 50}}>
                    {this.TouchDrawer('내 계정')}
                    <View style={styles.lineStyle} />
                    {this.TouchDrawer('공지사항')}
                    <View style={styles.lineStyle} />
                    {this.TouchDrawer('자주 묻는 질문')}
                    <View style={styles.lineStyle} />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => this.sendMail()}
                    >
                        <Text style={styles.textStyle}>1:1 문의하기</Text>
                        <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>〉</Text>
                    </TouchableOpacity>
                    <View style={styles.lineStyle} />
                    {this.TouchDrawer('앱 설정')}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    profileStyle: {
        width: 90,
        height: 90
    },
    nameStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    userStyle: {
        color: '#FFFFFF',
        fontSize: 15
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 5,
        padding: 20
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 20
    },
    lineStyle: {
        flex: 1,
        height: 2,
        backgroundColor: '#58724D',
        marginHorizontal: 40
    }
});

export default SlideDrawer;
export const ProfileImage = Profile;
export const Nickname = Name;