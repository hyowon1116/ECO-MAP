/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class EditPassword extends Component {

    state = {newPassword: ''}

    ChangeText = (password) => {
        this.setState({newPassword: password})
    }
    
    render() {

        const CheckText = () => {
            if (this.state.newPassword === '') {
                alert('변경할 비밀번호를 입력해주세요!');
            } else {
                this.props.navigation.navigate('내 계정', {password: this.state.newPassword});
            }
        }

        return (
            <View style={{alignItems: 'center'}}>
                <TextInput
                    style={styles.input}
                    placeholder='새로운 비밀번호'
                    secureTextEntry={true}
                    onChangeText={password => this.ChangeText(password)}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={CheckText}
                >
                    <Text style={styles.textStyle}>변경</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 50,
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#006400',
        borderWidth: 2,
        marginVertical: 15,
        paddingHorizontal: 13
    },
    buttonStyle: {
        width: '90%',
        paddingVertical: 10,
        backgroundColor: '#C7EAFF',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default EditPassword;