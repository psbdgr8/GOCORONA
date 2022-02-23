import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen';
import SafeViewAndroid from "./components/SafeViewAndroid";
import NewsScreen from './screens/NewsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: true, title: '', headerShadowVisible: false  }} name="COVID-19"component={HomeScreen} />
        <Stack.Screen options={{ headerShown: true, title: 'News', headerShadowVisible: false  }} name="News"component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
