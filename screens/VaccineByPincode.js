import { StyleSheet, Text, View } from "react-native";
import React, {useContext} from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { darkModeContext } from "../API/Context";

const VaccineByPincode = ({ item }) => {
  const [isDarkMode] = useContext(darkModeContext);
  return (
    <View style={{backgroundColor: isDarkMode === true? "black" : "white", ...styles.container}}>
      <View style={{backgroundColor: isDarkMode === true? "black" : "white",...styles.card}}>
        <View style={{flexWrap: "wrap", flexGrow: 1}}>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.center_id}}>Center Name: {item.name}</Text>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.center_id}}>Pincode: {item.pincode}</Text>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.center_id}}>District Name: {item.district_name}</Text>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.center_id}}>Block Name: {item.block_name}</Text>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.center_id}}>Date: {item.sessions[0].date}</Text>
        <Text style={{color: isDarkMode === true ? "white" : "black", ...styles.center_id}}>Available Capacity: {item.sessions[0].available_capacity}</Text>
        </View>
    </View></View>
  );
};

export default VaccineByPincode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  card: {
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
    width: "98%",
     alignSelf: "center",
     paddingVertical: 15

  },
  center_id: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    width: "97%",
    paddingLeft: "5%",
    paddingRight: "5%"

  },
});
