import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Card from "./Card";


const News = ({ item }) => {
    function DefaultImage() {
return(
    <View>
<Image
            style={styles.image}
            source={{
              uri: "https://i0.wp.com/avenuemail.in/wp-content/uploads/2021/04/2-1.jpg?resize=696%2C465&ssl=1",
            }}
          /></View>
);
    };
  return (
    <View style={styles.rows}>
      <Image
        style={styles.image}
        source={{ uri: item.urlToImage }}
        onError={DefaultImage}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    width: "100%",
    marginBottom: 5,
    backgroundColor: "white",
  },
  case: {
    alignSelf: "stretch",
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  description: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "normal",
    alignSelf: "flex-start",
    color: "black",
    margin: 10,
    marginLeft: 10,
  },
  death: {
    marginTop: 0,
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "gray",
    marginLeft: 20,
  },
  image: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").width / 1.1,
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
  flag: {
    height: 30,
    width: 40,
    padding: 10,
    borderRadius: 1000,
  },
});

export default News;
