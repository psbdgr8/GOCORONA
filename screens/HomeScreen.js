import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SwitchSelector from "react-native-switch-selector";
import Card from "../components/Card";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import WelcomeScreen from "./WelcomeScreen";
import NewsScreen from "./NewsScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.mainImage}
            source={require("../assets/doctor.png")}
          />
        </View>
        <View style={styles.topTextView}>
          <Text style={styles.topText}>
            Know safety tips{"\n"}and precautions.
          </Text>
        </View>
      </Card>
      <Card style={styles.card2}>
        <SwitchSelector
          initial={0}
          textColor={"#c9815b"}
          selectedColor={"black"}
          buttonColor={"white"}
          backgroundColor={"#FBD8C5"}
          fontSize={RFPercentage(2.5)}
          options={[
            { label: "Tracker", value: "T" },
            { label: "Symptoms", value: "S" },
          ]}
          height={50}
          style={styles.switch}
          onPress={(value) => console.log(`Call onPress with value: ${value}`)}
        />
      </Card>
      <SwitchSelector
        initial={0}
        textColor={"#B3B3B3"}
        selectedColor={"#c9815b"}
        buttonColor={"white"}
        fontSize={RFPercentage(1.8)}
        options={[
          { label: "Country", value: "country" },
          { label: "State", value: "state" },
          { label: "City", value: "city" },
          { label: "Worldwide", value: "world" },
        ]}
        style={styles.filter}
        onPress={(value) => console.log(`Call onPress with value: ${value}`)}
      />
      <View style={styles.cardContainer}>
        <Card>
          <Text>hi</Text>
        </Card>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: RFPercentage(3),
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "stretch",
    alignSelf: "stretch",
    backgroundColor: "black",
  },
  topText: {
    fontSize: RFPercentage(3),
    fontWeight: "800",
  },
  topTextView: {
    flexDirection: "column",
    marginLeft: -20,
    marginTop: 20,
  },
  filter: {
    marginTop: 30,
    marginRight: 40,
    marginLeft: 20,
  },
  card: {
    width: "90%",
    height: 130,
    elevation: 1,
    flexDirection: "row",
    backgroundColor: "#CFE3FC",
    alignItems: "flex-start",
  },
  imageWrapper: {
    marginTop: -47,
    marginLeft: -20,
  },
  smallcard: {
    height: 45,
    elevation: 1,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
  },
  card2: {
    width: "90%",
    height: 65,
    elevation: 1,
    borderRadius: 50,
    backgroundColor: "#FBD8C5",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainImage: {
    resizeMode: "contain",
    height: 200,
    width: 200,
  },
  switch: {
    marginLeft: 15,
    marginRight: 15,
    elevation: 10,
  },
  selector: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
