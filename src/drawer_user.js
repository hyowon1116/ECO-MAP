/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ProfilePicture from 'react-native-profile-picture';
import OptionMenu from 'react-native-option-menu';

import {ProfileImage, Nickname} from './slide_drawer';

class DrawerUser extends Component {

    constructor() {
        super();
        this.state = {
            newProfile: null
        };
    }
    
    editImage() {
        ImageCropPicker.openPicker({
            width: 500,
            height: 500,
            cropping: true,
            cropperCircleOverlay: true,
            sortOrder: 'none',
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            includeExif: true,
            cropperStatusBarColor: '#FFFFFF',
            cropperToolbarColor: '#FFFFFF',
            cropperActiveWidgetColor: '#FFFFFF',
            cropperToolbarWidgetColor: '#398524'
        })
            .then((profile) => {
                this.setState({newProfile: {uri: profile.path}});
            })
            .catch((e) => console.log(e))
    }

    deleteImage() {
        this.setState({newProfile: require('./assets/logo.jpg')})
    }

    setImage(image) {
        return (
            <ProfilePicture
                isPicture={true}
                requirePicture={image}
                pictureStyle={styles.profileStyle}
            />
        )
    }

    render() {
        const {params} = this.props.route;
        const nickname = params.nickname ? params.nickname : Nickname;
        // const password = params.password ? params.password : 0;

        return (
            <ScrollView>
                <View style={styles.boxStyle}>
                    <View style={styles.viewStyle1}>
                        {this.state.newProfile ? this.setImage(this.state.newProfile) : this.setImage(ProfileImage)}
                    </View>
                    <View style={styles.viewStyle2}>
                        <OptionMenu
                            customButton={(
                                <View style={styles.touchStyle}>
                                    <Text style={styles.textStyle}>프로필 사진 </Text>
                                    <Text style={styles.arrowStyle}> 〉</Text>
                                </View>
                            )}
                            options={['사진 변경', '기본 이미지로 변경', '취소']}
                            actions={[() => this.editImage(), () => this.deleteImage()]}
                        />
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.boxStyle}>
                    <View style={styles.viewStyle1}>
                        <Text style={{fontSize: 25, fontWeight: '500'}}>{nickname}</Text>
                        <Text style={{fontSize: 20}}> 님</Text>
                    </View>
                    <View style={styles.viewStyle2}>
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={() => this.props.navigation.navigate('닉네임 변경', {oldName: nickname})}
                        >
                            <Text style={styles.textStyle}>닉네임 </Text>
                            <Text style={styles.arrowStyle}> 〉</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.boxStyle}>
                    <View style={styles.viewStyle2}>
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={() => this.props.navigation.navigate('비밀번호 변경')}
                        >
                            <Text style={styles.textStyle}>비밀번호 </Text>
                            <Text style={styles.arrowStyle}> 〉</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.boxStyle}>
                    <View style={styles.viewStyle2}>
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={() => alert('로그아웃')}
                        >
                            <Text style={styles.textStyle}>로그아웃 </Text>
                            <Text style={styles.arrowStyle}> 〉</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.boxStyle}>
                    <View style={styles.viewStyle2}>
                        <TouchableOpacity
                            style={styles.touchStyle}
                            onPress={() => alert('계정 삭제')}
                        >
                            <Text style={[styles.textStyle, {color: '#BF0A0A'}]}>계정 삭제 </Text>
                            <Text style={[styles.arrowStyle, {color: '#BF0A0A'}]}> 〉</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    viewStyle1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    viewStyle2: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    touchStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    profileStyle: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#000000'
    },
    textStyle: {
        color: '#4A4A4A',
        fontSize: 20
    },
    arrowStyle: {
        color: '#4A4A4A',
        fontSize: 30
    },
    lineStyle: {
        flex: 1,
        height: 2,
        backgroundColor: '#CDCDCD',
        marginHorizontal: 25
    }
})

export default DrawerUser;