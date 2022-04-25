import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import store from './store';

import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import EatsScreen from './screen/EatsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
              <Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
}

