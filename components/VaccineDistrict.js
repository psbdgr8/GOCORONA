import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Card from "./Card";

const VaccineDistrict = ({ item }) => {
    const navigation = useNavigation();
    const [cityId, setCityID] = useState();
    function all() {
      navigation.navigate("Vaccination", {cityId: item.district_id});
      setCityID(item.district_id)
    }
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={all}>
        <Text style={styles.cityName}>{item.district_name}</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: "white",
  },
  cityName: {
    fontSize: 30,
    margin: 20,
    fontWeight: "bold",
    color: "black",
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

export default VaccineDistrict;
