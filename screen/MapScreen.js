import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import tw from 'twrnc';
import MapView from 'react-native-maps';
import Map from '../components/Map';



const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text>MapScreen</Text> */}
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </SafeAreaView>
  )
}

export default MapScreen 

const styles = StyleSheet.create({})