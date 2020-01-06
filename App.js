import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import MapViewStations from "./src/MapViewStations/MapViewStations";
import InforStation from "./src/InfoStation/InforStation"

const screen = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapViewStations />
        <InforStation />
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
  }
});
