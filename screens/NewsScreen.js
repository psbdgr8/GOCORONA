import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

const NewsScreen = () => {
  const navigation = useNavigation();
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=74475e7b2056458b89758418414e5621";
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const fetchNewsData = async () => {
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response);
        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNewsData();
  }, []);
  function News() {
    return(
    <View>
      <Text>{data ? data.articles[0].title : 0}</Text>
    </View>
    );
  }
  return <View style={styles.container}>
    {isLoading === true ? <ActivityIndicator size={"large"} 
        color={"cyan"} paddingTop={Dimensions.get("window").height/2}/> : <News/>}
  </View>;
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
