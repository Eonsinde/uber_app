import { StatusBar, Text, SafeAreaView } from 'react-native'
import React from 'react'

const EatsScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <Text>EatsScreen</Text>
    </SafeAreaView>
  )
}

export default EatsScreen
