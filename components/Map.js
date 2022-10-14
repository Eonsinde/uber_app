import React from 'react'
import { useSelector } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc'
import { selectOrigin } from '../slice/navSlice';


const Map = () => {
    const origin = useSelector(selectOrigin);

    return (
        <MapView
            style={tw`flex-1`}
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin?.location && (<Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng
                }}
                title='origin'
                description={origin.description}
                identifier='origin'
            />)}
        </MapView>
    )
}

export default Map