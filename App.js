/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer, DrawerActions, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MapScreen from './src/map';
import RankingScreen from './src/ranking';
import GoodsScreen from './src/goods';
import MarketScreen from './src/market';

import MapAddScreen from './src/map_add';
import MapMenu1Screen from './src/map_menu1';
import MapMenu2Screen from './src/map_menu2';
import MapSearchScreen from './src/map_search';
import MapCameraScreen from './src/map_camera';
import MapPhotoScreen from './src/map_photo';

import SlideDrawer from './src/slide_drawer';
import DrawerUser from './src/drawer_user';
import DrawerNotice from './src/drawer_notice';
import DrawerQna from './src/drawer_qna';
import DrawerSetting from './src/drawer_setting';
import EditUserName from './src/edit_user_name';
import EditUserPassword from './src/edit_user_password';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    TabBarIcon(focused, route.name)
                ),
                tabBarActiveTintColor: '#008000',
                tabBarActiveBackgroundColor: '#E9FFDB'
            })}
        >
            <Tab.Screen name='ECO-MAP' component={MapScreen} />
            <Tab.Screen name='RANKING' component={RankingScreen} />
            <Tab.Screen name='GOODS' component={GoodsScreen} />
            <Tab.Screen name='MARKET' component={MarketScreen} />
        </Tab.Navigator>
    )
}

const TabBarIcon = (focused, name) => {
    let iconName;

    if (name === 'ECO-MAP') {iconName = 'location'}
    else if (name === 'RANKING') {iconName = 'md-stats-chart'}
    else if (name === 'GOODS') {iconName = 'leaf'}
    else if (name === 'MARKET') {iconName = 'cart'}

    return (
        <Ionicons
            name={iconName}
            size={focused ? 30 : 20}
        />
    )
}

const DrawerComponent = () => {
    return (
        <Drawer.Navigator
            screenOptions={{drawerPosition: 'right', headerShown: false}}
            drawerContent={props => <SlideDrawer {...props} />}
        >
            <Drawer.Screen name='Route' component={TabComponent} />
        </Drawer.Navigator>
    )
}

const HeaderRight = () => {
    const navigation = useNavigation();
    return (
        <View style={{flexDirection: 'row', paddingRight: 15}}>
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                <Ionicons name='menu' size={30} />
            </TouchableOpacity>
        </View>
    )
}

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Main'
                        component={DrawerComponent}
                        options={{
                            title: (
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 23}}>ECO-MAP</Text>
                                    <Image
                                        source={require('./src/assets/logo_icon.png')}
                                        resizeMode='contain'
                                        style={{width: 53, height: 53, marginLeft: -7}}
                                    />
                                </View>
                            ),
                            headerTitleAlign: 'left',
                            headerRight: ({}) => <HeaderRight />
                        }}
                    />
                    
                    <Stack.Screen name='Map_Add'
                        component={MapAddScreen}
                        options={options.menu}
                    />
                    <Stack.Screen name='Map_Menu1'
                        component={MapMenu1Screen}
                        options={options.menu}
                    />
                    <Stack.Screen name='Map_Menu2'
                        component={MapMenu2Screen}
                        options={options.menu}
                    />
                    <Stack.Screen name='Map_Search'
                        component={MapSearchScreen}
                        options={options.menu}
                    />
                    <Stack.Screen name='Map_Camera'
                        component={MapCameraScreen}
                        options={options.menu}
                    />
                    <Stack.Screen name='Map_Photo'
                        component={MapPhotoScreen}
                        options={options.menu}
                    />

                    <Stack.Screen name='내 계정'
                        component={DrawerUser}
                        options={options.stack}
                    />
                    <Stack.Screen name='공지사항'
                        component={DrawerNotice}
                        options={options.stack}
                    />
                    <Stack.Screen name='자주 묻는 질문'
                        component={DrawerQna}
                        options={options.stack}
                    />
                    <Stack.Screen name='앱 설정'
                        component={DrawerSetting}
                        options={options.stack}
                    />

                    <Stack.Screen name='닉네임 변경'
                        component={EditUserName}
                        options={options.stack}
                    />
                    <Stack.Screen name='비밀번호 변경'
                        component={EditUserPassword}
                        options={options.stack}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const options = ({
    menu: {
        title: '',
        headerBackTitle: 'BACK'
    },
    stack: {
        headerBackTitle: 'BACK',
        headerTitleAlign: 'center'
    }
})

export default App;