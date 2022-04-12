import React, { useState, createContext, useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Switch,
  Appearance
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {darkModeContext} from "../API/Context"
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation} from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
    const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
  function Mode() {
    setIsDarkMode((previousState) => !previousState);
  }
  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? "black" : "white"}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "transparent",
          marginTop: -40,
        }}
      >
        <ImageBackground
          source={{
            uri: 'https://cdn.editorji.com/5f05635e467a2_covid-19-world-tracker.jpg',
          }}
          style={{ padding: 0, elevation: 5, }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 180,
              marginBottom: 5,
            }}
          ></Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: isDarkMode ? "black" : "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 8, borderTopWidth: 3, borderTopColor: isDarkMode ? "#1a1aff" : "#ccc" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: RFPercentage(0.1),
            marginHorizontal: 8,
            paddingRight: 5
          }}
        >
          <Text
            style={{
              color: isDarkMode ? "white" : "black",
              fontWeight: "bold",
              fontSize: RFPercentage(2),
              marginBottom: 5,
            }}
          >
            Dark Mode
          </Text>
          <Switch
            trackColor={{ true: "lightblue", false: "gray" }}
            thumbColor={isDarkMode === true ? "#1a1aff" : "white"}
            ios_backgroundColor="white"
            onValueChange={Mode}
            value={isDarkMode}
          />
        </View>
      </View>
    </View>
  );
};
export default CustomDrawer;
