import React from 'react'
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn'
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8'
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf'
  }
]

const RideOptionsCard = ({ navigation }) => {
  const [selected, setSelected] = React.useState(null)

  return (
    <SafeAreaView style={[tw`bg-white flex-grow`, styles.AndroidSafeArea]}>
      <View>
        <TouchableOpacity 
          style={tw`absolute top-3 z-50 left-5 p-3 rounded-full`}
          onPress={() => navigation.goBack() }
        >
            <Icon 
              name='chevron-left'
              type='fontawesome'
            />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={tw`flex-row items-center justify-between px-10 ${item.id === selected?.id && 'bg-gray-200 '}`}
            onPress={() => { setSelected(item) }}
          >
            <Image 
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold `}>{item.title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
      />
      
      {
        selected
        ?
        <View>
          <TouchableOpacity style={tw`bg-black py-3 my-3 mx-6 rounded-full`}>
            
              <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
              
          </TouchableOpacity>
        </View>
        :
        <></>
      }
    </SafeAreaView>
  )
}

// not needed but intentionally included
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default RideOptionsCard