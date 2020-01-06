import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default function MapViewStations() {
    return (
        <MapView style={styles.mapStyle} 
          initialRegion={{
            latitude: -27.6229249,
            longitude: -48.6796361,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -27.6229249,
              longitude: -48.6796361,
            }}
          />
          <Marker
            coordinate={{
              latitude: -26.905948,
              longitude: -48.66227,
            }}
          />
        </MapView>
    )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: screen.width,
    height: screen.height,
  }
});
