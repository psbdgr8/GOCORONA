import "react-native-gesture-handler";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationRouteContext, useNavigation } from "@react-navigation/core";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import {StatusBar} from "react-native"
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
import SearchByPincode from "./screens/SearchByPincode";
import {Text} from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Pincode from "./screens/Pincode";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  const navigation = useNavigation();
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
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Pincode")}>
              <IonIcon 
              name="search"
              size={RFPercentage(3)}
              style={{marginRight: RFPercentage(1.5)}}
              />
            </TouchableOpacity>),
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
      {/* <Drawer.Screen
        options={{
          headerShown: true,
          headerTitle: "Vaccine Availablity",
          headerTitleAlign: "center",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: "black",
            fontWeight: "bold",
          },
          title: "Search by Pincode",
        }}
        name="Pincode"
        component={SearchByPincode}
      /> */}
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
      <StatusBar backgroundColor="transparent" animated={true}
        barStyle="dark-content" translucent={true}
      />
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
          name="Pincode"
          component={Pincode}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Vaccination"
          component={VaccineScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Search"
          component={SearchByPincode}
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
