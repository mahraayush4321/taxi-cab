import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Button,Image} from 'react-native';
import { Provider } from 'react-redux';
import Homescreen from './screens/Homescreen';
import { store } from './Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapscreen from './screens/Mapscreen';




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
        name="HomeScreen"
        component={Homescreen}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen
        name="MapScreen"
        component={Mapscreen}
        options={{
          headerShown:false,
        }}/>
      </Stack.Navigator>
      <Homescreen/>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    height:'50%',
    width:'100%',
  }
  
});
