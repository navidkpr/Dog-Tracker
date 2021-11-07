import * as React from 'react';
import { useEffect } from 'react'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation } from '../../../store/actions/location';

export default function Map() {
  const dispatch = useDispatch()
  dispatch(updateLocation())
  const lat = useSelector(state => state.location.lat)
  const lon = useSelector(state => state.location.lon)
  var markers = [
    {
      latitude: lat,
      longitude: lon,
      title: 'TEST',
      subtitle: 'TEST'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateLocation())
      console.log('This will run every second!');
    }, 5000);
    return () => clearInterval(interval);
 }, []);

  // console.log(latitude)
  // console.log(longitude)
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }} annotations={markers}>
        <Marker coordinate={{ latitude: lat, longitude: lon }} title="Buddy"/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
