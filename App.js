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
import {Appearance} from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Pincode from "./screens/Pincode";
import {useEffect} from "react"
import DarkMode, {darkModeContext} from "./API/Context"
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
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
          headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          headerShadowVisible: false,
          drawerLabel: "Home",
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: isDarkMode === true ? "white" : "black",
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
          headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: isDarkMode === true ? "white" : "black",
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
          headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: isDarkMode === true ? "white" : "black",
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
          headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Pincode")}>
              <IonIcon 
              name="search"

              size={RFPercentage(3)}
              style={{marginRight: RFPercentage(1.5), color: isDarkMode === true ? "white" : "black"}}
              />
            </TouchableOpacity>),
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: isDarkMode === true ? "white" : "black",
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
          headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          drawerLabelStyle: {
            fontSize: RFPercentage(2),
            color: isDarkMode === true ? "white" : "black",
            fontWeight: "bold",
          },
        }}
        name="News"
        component={NewsScreen}
      />
    </Drawer.Navigator>
  );
}

function MainApp(){
  const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
  const colorScheme = Appearance.getColorScheme();
  
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" animated={true}
        barStyle={isDarkMode === true ? "light-content" : "dark-content"} translucent={true}
      />
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
            headerStyle:
           { backgroundColor: isDarkMode === true ? "black" : "white"},
           headerTitleStyle: {
            fontWeight: 'bold',
            color: isDarkMode === true ? "white" : "black"
          }, }}
          name="Welcome"
          component={WelcomeScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: true,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
            headerStyle:
           { backgroundColor: isDarkMode === true ? "black" : "white"},
           headerTitleStyle: {
            fontWeight: 'bold',
            color: isDarkMode === true ? "white" : "black"
          }, }}
          name="Districts"
          component={VaccineStates}
        />
        <Stack.Screen
          options={{ headerShown: true,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
            headerStyle:
           { backgroundColor: isDarkMode === true ? "black" : "white"},
           headerTitleStyle: {
            fontWeight: 'bold',
            color: isDarkMode === true ? "white" : "black"
          }, }}
          name="Pincode"
          component={Pincode}
        />
        <Stack.Screen
          options={{ headerShown: true,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
            headerStyle:
           { backgroundColor: isDarkMode === true ? "black" : "white"},
           headerTitleStyle: {
            fontWeight: 'bold',
            color: isDarkMode === true ? "white" : "black"
          }, }}
          name="Vaccination"
          component={VaccineScreen}
        />
        <Stack.Screen
          options={{ headerShown: true,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
            headerStyle:
           { backgroundColor: isDarkMode === true ? "black" : "white"},
           headerTitleStyle: {
            fontWeight: 'bold',
            color: isDarkMode === true ? "white" : "black"
          }, }}
          name="Search"
          component={SearchByPincode}
        />
        <Stack.Screen
          options={{ headerShown: true,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
            headerStyle:
           { backgroundColor: isDarkMode === true ? "black" : "white"},
           headerTitleStyle: {
            fontWeight: 'bold',
            color: isDarkMode === true ? "white" : "black"
          }, }}
          name="Availablity"
          component={AvailableVaccine}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            title: "",
            headerShadowVisible: false,
            headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          }}
          name="COVID-19"
          component={Routes}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            title: "News",
            headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          }}
          name="News"
          component={NewsScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: "Safety Tips and Precautions",
            title: "Safety Tips & Precautions",
            headerTintColor: isDarkMode === true ? '#fff':'#000',
          headerStyle:
         { backgroundColor: isDarkMode === true ? "black" : "white"},
         headerTitleStyle: {
          fontWeight: 'bold',
          color: isDarkMode === true ? "white" : "black"
        },
          }}
          name="Safety"
          component={SafetyTipsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
function App() {
  
  return (
    <DarkMode>
    <MainApp/>
    </DarkMode>
  );
}
export default App;
