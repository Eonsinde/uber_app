import React from 'react'
import { useSelector } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slice/navSlice';
import tw from 'twrnc';
import { Icon } from "react-native-elements";


const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(`${item.screen}`)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && "opacity-30"}`}>
                        <Image
                            style={{ height:120, width:120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold text-black dark:text-white`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                            name="arrowright" 
                            color="white" 
                            type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions