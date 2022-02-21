import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen';
import SafeViewAndroid from "./components/SafeViewAndroid";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="COVID-19"component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
