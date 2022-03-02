import { useNavigation } from "@react-navigation/core";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Card from "../components/Card";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";

function Tracker() {
  return (
    <View style={{ flex: 4, justifyContent: "center" }}>
      <SwitchSelector
        initial={0}
        textColor={"#B3B3B3"}
        selectedColor={"#c9815b"}
        buttonColor={"white"}
        fontSize={RFPercentage(2.2)}
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
        <Card style={styles.bottomCard1}>
          <Text style={styles.bottomCardText}>Confirmed</Text>
        </Card>
        <Card style={styles.bottomCard2}>
          <Text style={styles.bottomCardText2}>Active</Text>
        </Card>
        <Card style={styles.bottomCard3}>
          <Text style={styles.bottomCardText3}>Recovered</Text>
        </Card>
        <Card style={styles.bottomCard4}>
          <Text style={styles.bottomCardText4}>Deceased</Text>
        </Card>
        <Card>
          <Text style={styles.graphCardText}>Spread Trend</Text>
        </Card>
        <Card style={styles.graph}>
          <Text style={styles.graphCardText}>graph material will be here!</Text>
        </Card>
      </View>
    </View>
  );
}

function Symptoms() {
  return (
    <View style={{ alignContent: "center", alignSelf: "center" }}>
      <Card style={styles.symptoms}>
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            textAlign: "justify",
            fontWeight: "900",
            lineHeight: RFPercentage(5),
            margin: 20,
            color: "black",
            alignItems: "center",
          }}
        >
          ⦿ Fever or chills{"\n"}⦿ Cough{"\n"}⦿ Shortness of breath or {"\n"}
          {"  "} difficulty breathing{"\n"}⦿ Fatigue{"\n"}⦿ Muscle or body aches
          {"\n"}⦿ Headache{"\n"}⦿ New loss of taste or smell{"\n"}⦿ Sore throat
          {"\n"}⦿ Congestion or runny nose{"\n"}⦿ Nausea or vomiting{"\n"}⦿
          Diarrhea
        </Text>
      </Card>
    </View>
  );
}
const HomeScreen = () => {
  const navigation = useNavigation();
  const [showtracker, setShowTracker] = useState(true);

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
          <TouchableOpacity onPress={() => {navigation.navigate("Safety")}}>
          <Text style={styles.topText}>
            Know safety tips{"\n"}and precautions here.
          </Text></TouchableOpacity>
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
            { label: "Tracker", value: true },
            { label: "Symptoms", value: false },
          ]}
          height={40}
          style={styles.switch}
          onPress={(value) => setShowTracker(value)}
        />
      </Card>
      {showtracker === true ? <Tracker /> : <Symptoms />}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: RFPercentage(2.7),
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    justifyContent: "center",
  },
  bottomCardText: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.3),
    fontWeight: "bold",
    color: "#FC1441",
  },
  bottomCardText2: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.3),
    fontWeight: "bold",
    color: "#157FFB",
  },
  bottomCardText3: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.4),
    fontWeight: "900",
    color: "#30A64A",
  },
  bottomCardText4: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.4),
    fontWeight: "900",
    color: "#6D757D",
  },
  graphCardText: {
    marginTop: Dimensions.get("window").width / 50,
    fontSize: RFPercentage(2.5),
    fontWeight: "900",
    color: "black",
    alignSelf: "center"
  },
  bottomCard1: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard2: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard3: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard4: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  graph: {
    height: Dimensions.get("window").width / 2.65,
    width: Dimensions.get("window").width / 1.1,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1
  },
  topText: {
    fontSize: RFPercentage(3),
    fontWeight: "800",
    alignSelf: "center",
    textAlign: "justify",
    flexWrap: "wrap"
  },
  topTextView: {
    flexDirection: "column",
    marginLeft: -20,
    marginTop: 20,
    alignContent: "center",
     justifyContent: "center"
  },
  filter: {
    marginTop: 5,
    marginRight: 40,
    marginLeft: 20,
    alignSelf: "center",
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
    height: 50,
    elevation: 0,
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
    marginLeft: 5,
    marginRight: 5,
    elevation: 10,
  },
  selector: {
    flex: 1,
    backgroundColor: "yellow",
  },
  symptoms: {
    height: Dimensions.get("window").width / 0.74,
    width: Dimensions.get("window").width / 1.1,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
});
