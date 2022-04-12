import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkModeContext } from "../API/Context";
import Card from "./Card";

const Vaccine = ({ item }) => {
  const [isDarkMode] = useContext(darkModeContext);
  const navigation = useNavigation();
  const [id, setID] = useState();
  function one() {
    navigation.navigate("Districts", {id: item.state_id});
    setID(item.state_id)
  }
  return (
    <View style={{backgroundColor: isDarkMode === true ? "black" : "white",...styles.container}}>
      <TouchableOpacity onPress={one}>
        <Text style={{color: isDarkMode === true? "white" : "black", ...styles.stateName}}>{item.state_name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    
  },
  stateName: {
    fontSize: 30,
    margin: 20,
    fontWeight: "bold"
  },
  card: {
    height: Dimensions.get("window").width / 5,
    width: Dimensions.get("window").width / 1.1,
    borderRadius: 20,
    borderWidth: 2,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default Vaccine;
