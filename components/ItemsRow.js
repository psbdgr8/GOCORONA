import React, {useContext} from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Card from "./Card";
import {darkModeContext} from "../API/Context"

const ItemRows = ({ item }) => {
  const [isDarkMode] = useContext(darkModeContext);
  return (
    <View style={{backgroundColor: isDarkMode === true? "black" : "white",...styles.rows}}>
      <View
        style={{
          justifyContent: "space-around",
        }}
      >
        <Card style={styles.card}>
          <View>
            <Text style={styles.countryName}>{item.Country}</Text>
          </View>
          <View style={styles.case}>
            <Text style={styles.totalCases}>
              Total Confirmed: {item.TotalConfirmed}
            </Text>
          </View>
          <View style={styles.case}>
            <Text style={styles.death}>Total Deaths: {item.TotalDeaths}</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    width: "100%",
    marginBottom: 5,
  },
  case: {
    alignSelf: "stretch",
  },
  countryName: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    color: "brown",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  totalCases: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "red",
    margin: 10,
    marginLeft: 20,
  },
  death: {
    marginTop: 0,
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "black",
    marginLeft: 20,
  },
  card: {
    height: Dimensions.get("window").width / 2.8,
    width: Dimensions.get("window").width / 1.1,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    borderRadius: 20,
    elevation: 5,
    alignSelf: "center",
    alignContent: "flex-start",
  },
  flag: {
    height: 30,
    width: 40,
    padding: 10,
    borderRadius: 1000,
  },
});

export default ItemRows;
