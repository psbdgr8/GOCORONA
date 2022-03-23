import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native-web";

const AvailableVaccine = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{flexWrap: "wrap", flexGrow: 1}}>
        <Text style={styles.center_id}>Center Name: {item.name}</Text>
        <Text style={styles.center_id}>District Name: {item.district_name}</Text>
        <Text style={styles.center_id}>Block Name: {item.block_name}</Text>
        <Text style={styles.center_id}>Pincode: {item.pincode}</Text>
        <Text style={styles.center_id}>Time from: {item.from} to:{item.to}</Text>
        <Text style={styles.center_id}>Fees: {item.fee_type}</Text>
        <Text style={styles.center_id}>Date: {item.date}</Text>
        <Text style={styles.center_id}>Available: {item.available_capacity}</Text>
        <Text style={styles.center_id}>Minimum Age Limit: {item.min_age_limit}</Text>
        <Text style={styles.center_id}>Vaccine Type: {item.vaccine}</Text>
        <Text style={styles.center_id}>Slot 1: {item.slots[0]}</Text>
        <Text style={styles.center_id}>Slot 2: {item.slots[1]}</Text>
        <Text style={styles.center_id}>Slot 3: {item.slots[2]}</Text>
        <Text style={styles.center_id}>Slot 4: {item.slots[3]}</Text>
        </View>
    </View></View>
  );
};

export default AvailableVaccine;

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
    backgroundColor: "white",
    width: "98%",
     alignSelf: "center",

  },
  center_id: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    color: "black",
    width: "97%",
    paddingLeft: "5%",
    paddingRight: "5%"

  },
});
