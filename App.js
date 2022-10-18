import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider } from 'react-redux';
import store from './store';

import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import EatsScreen from './screen/EatsScreen';


// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
              <Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
}

