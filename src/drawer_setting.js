/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

class DrawerSetting extends Component {

    state = {
        switch1: false,
        switch2: false,
        switch3: false
    }

    PressSwitch1 = () => {
        this.setState({switch1: !this.state.switch1});
        if (this.state.switch1 === true) {
            console.log('Switch1 Off');
        } else {
            console.log('Switch1 On');
        }
    }

    PressSwitch2 = () => {
        this.setState({switch2: !this.state.switch2});
        if (this.state.switch2 === true) {
            console.log('Switch2 Off');
        } else {
            console.log('Switch2 On');
        }
    }

    PressSwitch3 = () => {
        this.setState({switch3: !this.state.switch3});
        if (this.state.switch3 === true) {
            console.log('Switch3 Off');
        } else {
            console.log('Switch3 On');
        }
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>설정 항목1</Text>
                    <SwitchToggle
                        duration={150}
                        containerStyle={styles.switchStyle}
                        switchOn={this.state.switch1}
                        onPress={() => this.PressSwitch1()}
                    />
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>설정 항목2</Text>
                    <SwitchToggle
                        duration={150}
                        containerStyle={styles.switchStyle}
                        switchOn={this.state.switch2}
                        onPress={() => this.PressSwitch2()}
                    />
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>설정 항목3</Text>
                    <SwitchToggle
                        duration={150}
                        containerStyle={styles.switchStyle}
                        switchOn={this.state.switch3}
                        onPress={() => this.PressSwitch3()}
                    />
                </View>
                <View style={styles.lineStyle} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    textStyle: {
        color: '#4A4A4A',
        fontSize: 20
    },
    switchStyle: {
        width: 80,
        height: 40,
        borderRadius: 25,
        padding: 5
    },
    lineStyle: {
        flex: 1,
        height: 2,
        backgroundColor: '#CDCDCD',
        marginHorizontal: 25
    }
})

export default DrawerSetting;