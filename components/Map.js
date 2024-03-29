import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { View, Text, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slice/navSlice';
import tw from 'twrnc'
import { GOOGLE_MAPS_API_KEY } from '@env'


const Map = () => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    const mapRef = React.useRef(null);

    React.useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, left: 50, right: 50, bottom: 50 },
            animated: true
        });
    }, [origin, destination]);

    React.useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(
                `https://maps.googleapis.com/maps/api/distancematrix/json?
                units=imperial&origins=${origin.description}&destinations=
                ${destination.description}&key=${GOOGLE_MAPS_API_KEY}`
            )
                .then(res => res.json())
                .then(data => {
                    dispatch(setTravelTimeInformation(data.rows[0].elements))
                })
                .catch(err => console.error(err))
        }

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_API_KEY]);

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType='mutedStandard'
            loadingEnabled={true}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {/* create markers from origin to destination */}
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}

            {/* create markers for origin and destination */}
            {origin?.location && (<Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng
                }}
                title='Origin'
                description={origin.description}
                identifier='origin'
            />)}
            {destination?.location && (<Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng
                }}
                title='Destination'
                description={destination.description}
                identifier='destination'
            />)}
        </MapView>
    )
}

export default Map