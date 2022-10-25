import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
// components import
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import ScreenHeader from '../components/ScreenHeader';



const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator
          // screenOptions={{
          //   header : ({ ...props }) => <ScreenHeader {...props} />
          // }}
        >
          <Stack.Screen 
            name='NavigateCard' 
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='RideOptionsCard' 
            component={RideOptionsCard}
            options={{
              // headerTitle: 'Ride Options',
              headerShown: false 
            }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen 

const styles = StyleSheet.create({})