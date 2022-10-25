import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux';
// googleplacesautocomplete import
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import tw from 'twrnc'
import { selectDestination, setDestination } from '../slice/navSlice';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
    const destination = useSelector(selectDestination)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Eonsinde</Text>
            <View style={tw`flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        placeholder='Where To?'
                        styles={inputBoxStyles}
                        query={{
                            key: GOOGLE_MAPS_API_KEY,
                            language: 'en' 
                        }}
                        onPress={(data, details=null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate("RideOptionsCard")
                        }}
                        returnKeyType={"search"}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        minLength={2}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                    />
                </View>

                <NavFavourites />
                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('RideOptionsCard')}
                        disabled={!destination}
                    >
                        <View
                            style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full ${!destination && 'opacity-50'}`}
                        >
                            <Icon 
                                name='car'
                                type='font-awesome'
                                color='white'
                                size={16}
                            />
                            <Text style={tw`text-white text-center`}>Rides</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        disabled={!destination}
                    >
                        <View
                            style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full ${!destination && 'opacity-50'}`}
                        >
                            <Icon 
                                name='fast-food-outline'
                                type='ionicon'
                                color='black'
                                size={16}
                            />
                            <Text style={tw`text-black text-center`}>Eats</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const inputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})

export default NavigateCard
