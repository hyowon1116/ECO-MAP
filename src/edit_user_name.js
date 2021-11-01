/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class EditUserName extends Component {

    state = {newName: ''}

    ChangeText = (name) => {
        this.setState({newName: name})
    }

    render() {
        const {params} = this.props.route;
        const oldName = params.oldName;

        const CheckText = () => {
            if (this.state.newName === '') {
                alert('변경할 닉네임을 입력해주세요!');
            } else {
                this.props.navigation.navigate('내 계정', {nickname: this.state.newName});
            }
        }

        return (
            <View style={{alignItems: 'center'}}>
                <TextInput
                    style={styles.input}
                    placeholder={oldName}
                    onChangeText={name => this.ChangeText(name)}
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
        fontWeight: 'bold',
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

export default EditUserName;