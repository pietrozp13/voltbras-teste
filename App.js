import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';
import axios from 'axios';

import MapViewStations from "./src/MapViewStations/MapViewStations";
import InforStation from "./src/InfoStation/InforStation"


export default function App() {
  const [stations, setStations] = React.useState(null);
  const [selectedStation, setSelectedStation] = React.useState(null);

  const fetchData = async () => {
    const result = await axios(
      'https://api.voltbras.com.br/stations',
    );
    setStations(result.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);


  return (
    <SafeAreaView style={styles.containerSafe}>
      <StatusBar hidden={true} translucent={true} />
      <View style={styles.container}>
      {stations ? (
        <React.Fragment>
          <MapViewStations
            stations={stations}
            setSelectedStation={setSelectedStation}
          />
          <InforStation
            selectedStation={selectedStation}
            setSelectedStation={setSelectedStation}
          />
        </React.Fragment>
      ) : (
        <Text>Carregando ...</Text>
      )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
