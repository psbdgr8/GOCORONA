import "react-native-gesture-handler";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import SafetyTipsScreen from "./screens/SafetyTipsScreen";
import AllCountriesScreen from "./screens/AllCountriesScreen";
import StatesOfIndiaScreen from "./screens/StatesOfIndiaScreen";
import CustomDrawer, { Theme } from "./components/CustomDrawer";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useContext, useState } from "react";
import VaccineStatusScreen from "./screens/VaccineStatusScreen";
import Vaccine from "./components/Vaccine";
import VaccineStates from "./components/VaccineStates";
import VaccineScreen from "./screens/VaccineScreen";
import AvailableVaccine from "./screens/AvailableVaccine";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          title: "Home",
          headerShadowVisible: false,
          drawerLabel: "Home",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: "black",
            fontWeight: "bold",
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "All Countries",
          title: "All Countries",
          headerTitleAlign: "center",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: "black",
            fontWeight: "bold",
          },
        }}
        name="Countries"
        component={AllCountriesScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "States of India",
          headerTitleAlign: "center",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: "black",
            fontWeight: "bold",
          },
          title: "States of India",
        }}
        name="States"
        component={StatesOfIndiaScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "Vaccine Availablity",
          headerTitleAlign: "center",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: "black",
            fontWeight: "bold",
          },
          title: "Vaccine Availablity",
        }}
        name="Vaccine"
        component={VaccineStatusScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "News",
          title: "News",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: "black",
            fontWeight: "bold",
          },
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
          options={{ headerShown: true }}
          name="Districts"
          component={VaccineStates}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Vaccination"
          component={VaccineScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Availablity"
          component={AvailableVaccine}
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
