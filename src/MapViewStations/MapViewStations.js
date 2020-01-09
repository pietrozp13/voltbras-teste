import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions,View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screen = Dimensions.get('window');

export default function MapViewStations({ stations, setSelectedStation }) {
    function getPinColor (station) {
      let color
      if (station.status === 'AVAILABLE') {
        color = "green"
      }
      if (station.status !== 'AVAILABLE' && station.canControl){
        color = "red"
      } 
      if (!station.canControl) {
        color = "gray"
      }
      return color
    }

    return (
        <MapView style={styles.mapStyle} 
          initialRegion={{
            latitude: -27.6229249,
            longitude: -48.6796361,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {stations && stations.data.map((station)=> {
            return(
              <Marker
                key={station.id}
                onPress={() => setSelectedStation(station)}
                coordinate={{
                  latitude: station.geo.lat,
                  longitude: station.geo.long,
                }}
              >
                <Ionicons name={"ios-pin"} size={32} color={getPinColor(station)} />
              </Marker>
            );
          })}          
        </MapView>
    )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: screen.width,
    height: screen.height,
  }
});
