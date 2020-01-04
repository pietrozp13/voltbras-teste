import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
        <View style={styles.itemContainer}>
          <View
              key={'123'}
              style={styles.item}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: screen.width,
    height: screen.height,
  },
  itemContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 504,
  },
  item: {
    width: screen.width,
    height: screen.height,
    backgroundColor: 'gray',
    marginHorizontal: 10,
    opacity: 0.8,
    overflow: 'hidden',
    borderRadius: 20
  },
});
