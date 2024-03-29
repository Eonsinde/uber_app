import React from 'react'
import { useDispatch } from 'react-redux';
import { StyleSheet, View, SafeAreaView, Image, StatusBar, useColorScheme  } from 'react-native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import { setOrigin, setDestination } from '../slice/navSlice';


const HomeScreen = () => {
  const dispatch = useDispatch();
  // const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[tw`bg-white dark:bg-dark h-full`, { marginTop: StatusBar.currentHeight || 0 }]}>
      <View style={tw`p-5`}>
        {/* Uber logo */}
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete 
          placeholder='Where From?'
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en' 
          }}
          onPress={(data, details=null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        {/* Links to Map & Eat screen */}
        <NavOptions /> 
        {/* Links to favourite places */}
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
