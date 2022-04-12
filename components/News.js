import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Card from "./Card";
import { darkModeContext } from "../API/Context";

const News = ({ item }) => {
  const [isDarkMode] = useContext(darkModeContext);
  function DefaultImage() {
    return (
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://i0.wp.com/avenuemail.in/wp-content/uploads/2021/04/2-1.jpg?resize=696%2C465&ssl=1",
          }}
        />
      </View>
    );
  }
  function Url() {
    Linking.openURL(item.url);
  }
  return (
    <ScrollView
      style={{
        backgroundColor: isDarkMode === true ? "black" : "white",
        ...styles.rows,
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
        onError={DefaultImage}
      />
      <Text
        style={{
          color: isDarkMode === true ? "white" : "black",
          ...styles.title,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          color: isDarkMode === true ? "white" : "black",
          ...styles.description,
        }}
      >
        {item.content}
      </Text>
      <TouchableOpacity onPress={Url}>
        <Text style={styles.url}>Read more</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rows: {
    flex: 1,
  },
  url: {
    fontSize: RFPercentage(2.5),
    fontWeight: "normal",
    alignSelf: "flex-end",
    color: "blue",
    marginRight: 10,
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  },
  title: {
    fontSize: RFPercentage(4),
    fontWeight: "bold",
    marginLeft: RFPercentage(1),
    marginRight: RFPercentage(1),
    textAlign: "auto",
  },
  description: {
    marginTop: 5,
    fontSize: RFPercentage(2.8),
    fontWeight: "normal",
    marginLeft: RFPercentage(1),
    marginRight: RFPercentage(1),
    textAlign: "auto",
  },
  image: {
    width: Dimensions.get("window").width / 1,
    height: Dimensions.get("window").width / 1,
    alignSelf: "center",
  },
  card: {
    height: Dimensions.get("window").width / 2.5,
    width: Dimensions.get("window").width / 1.1,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    borderRadius: 20,
    elevation: 5,
    alignSelf: "center",
    alignContent: "flex-start",
    flexGrow: 1,
    flexWrap: "wrap",
  },
});

export default News;
