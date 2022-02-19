import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WelcomeScreen />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
