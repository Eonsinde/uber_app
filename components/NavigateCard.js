import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux';
// googleplacesautocomplete import
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import tw from 'twrnc'
import { setDestination } from '../slice/navSlice';
import NavFavourites from './NavFavourites';


const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Eonsinde</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
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
                <View>
                    <NavFavourites />
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
