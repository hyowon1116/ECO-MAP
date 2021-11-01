/**
 * React Native App
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {FAB} from 'react-native-paper';
import NaverMapView, {Marker, Path, Polyline, Polygon, Circle} from 'react-native-nmap';

const P0 = {latitude: 37.588835, longitude: 126.993964};
const P1 = {latitude: 37.589294, longitude: 126.993224};
const P2 = {latitude: 37.589434, longitude: 126.995064};

class MapScreen extends Component {

    LeafMarker(pos) {
        return (
            <Marker coordinate={pos} width={40} height={40}>
                <Image
                    source={require('./assets/leaf_icon.png')}
                    resizeMode='stretch'
                    style={{width: 40, height: 40}}
                />
            </Marker>
        )
    }
    
    GreenMarker(pos) {
        return (
            <Marker coordinate={pos} width={25} height={25}>
                <Image
                    source={require('./assets/recycle_icon.png')}
                    resizeMode='stretch'
                    style={{width: 25, height: 25}}
                />
            </Marker>
        )
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <NaverMapView
                    style={{flex: 1}}
                    center={{...P0, zoom: 16}}
                    // showsMyLocationButton={true}
                >
                    {this.LeafMarker(P0)}
                    {this.LeafMarker(P1)}
                    {this.GreenMarker(P2)}
                    <Path coordinates={[P0, P1]} width={7} color='#008000' />
                    {/* <Polyline coordinates={[P1, P2]} />
                    <Polygon coordinates={[P0, P1, P2]} color={"rgba(0, 0, 0, 0.5)"} />
                    <Circle coordinate={P0} color={"rgba(255, 0, 0, 0.3)"} radius={200} /> */}
                </NaverMapView>
                <FAB
                    icon={require('./assets/add_icon.png')}
                    onPress={() => this.props.navigation.navigate('Map_Add')}
                    style={styles.fabStyle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fabStyle: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#008000',
        bottom: 0
    }
})

export default MapScreen;