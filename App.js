import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import { View } from "react-native";
import SafetyTipsScreen from "./screens/SafetyTipsScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          title: "Home",
          headerShadowVisible: false,
          drawerLabel: "Home", 
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          title: "News",
          headerShadowVisible: false,
        }}
        name="News"
        component={NewsScreen}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            title: "",
            headerShadowVisible: false,
          }}
          name="COVID-19"
          component={Routes}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            title: "News",
            headerShadowVisible: false,
          }}
          name="News"
          component={NewsScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: "Safety Tips and Precautions",
            title: "Safety Tips & Precautions",
          }}
          name="Safety"
          component={SafetyTipsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
