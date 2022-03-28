import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        source={require("../assets/home.png")}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainer2}>
          <Text adjustsFontSizeToFit style={styles.title}>
            Be aware {"\n"}
            Stay healthy
          </Text>
          <Text adjustsFontSizeToFit style={styles.subtitle}>
            Welcome to COVID-19 information portal.
          </Text>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => navigation.replace("COVID-19")}>
              <Ionicons name="arrow-forward-circle" size={RFPercentage(7)} color="#9156EC" />
            </TouchableOpacity>
            <Text adjustsFontSizeToFit style={styles.gettitle}>GET STARTED</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFE3FC",
  },
  mainImage: {
    height: Dimensions.get("window").height / 1.3,
    width: Dimensions.get("window").width,
    marginBottom: -40
  },
  bottomContainer: {
    flex: 2,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "white",
    marginTop: -40,
  },
  bottomContainer2: {
    padding: 20,
    fontWeight: "600",
  },
  title: {
    fontSize: RFPercentage(4.5),
    fontWeight: "800",
    paddingLeft: 20,
    paddingTop: 5,
  },
  subtitle: {
    fontSize: RFPercentage(2),
    fontWeight: "700",
    paddingLeft: 20,
    paddingTop: 15,
    color: "gray",
  },
  box: {
    flexDirection: "row-reverse",
    paddingTop: 40,
  },
  gettitle: {
    fontSize: RFPercentage(2.7),
    padding: 20,
    paddingTop: RFPercentage(2),
    fontWeight: "700",
    color: "gray",
  },
});

export default WelcomeScreen;
