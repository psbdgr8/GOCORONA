import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { darkModeContext } from "../API/Context";
import Card from "./Card";

const VaccineDistrict = ({ item }) => {
    const navigation = useNavigation();
    const [isDarkMode] = useContext(darkModeContext);
    const [cityId, setCityID] = useState();
    function all() {
      navigation.navigate("Vaccination", {cityId: item.district_id});
      setCityID(item.district_id)
    }
    return (
      <View style={{ backgroundColor: isDarkMode === true ? "black" : "white",...styles.container}}>
          <TouchableOpacity onPress={all}>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.cityName}}>{item.district_name}</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
  cityName: {
    fontSize: 30,
    margin: 20,
    fontWeight: "bold",
  },
});

export default VaccineDistrict;
