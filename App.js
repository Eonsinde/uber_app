import 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider } from 'react-redux';
import store from './store';

import tw, { useDeviceContext } from 'twrnc';

import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import EatsScreen from './screen/EatsScreen';


// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);

  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView 
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
              style={{flex: 1}}
            >
              <StatusBar style="auto" />
              <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
                <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
                <Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
  );
}

