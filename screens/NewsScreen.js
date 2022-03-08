import { StyleSheet, Text, View, Dimensions, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import News from "../components/News";
import Carousel from "react-native-snap-carousel";

const NewsScreen = () => {
  const navigation = useNavigation();
  const url =
    "https://newsapi.org/v2/everything?q=COVID&sortBy=popularity&language=en&apiKey=74475e7b2056458b89758418414e5621";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    useEffect(() => {
        const fetchCovidData = async () => {
            setIsloading(true);
            try {
                const result = await fetch(url);
                const response = await result.json();
                setData(response)
                setIsloading(false);
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchCovidData();
    }, []);
    
    return (
      <View style={styles.container}>
        {isLoading === true ? <ActivityIndicator size={"large"} 
        color={"cyan"} paddingTop={Dimensions.get("window").height/1.3}/> :
        <View style={styles.content}>
        {/* <FlatList 
        data={data && data.articles ?  data.articles : 0}
        renderItem={({item})=> <News item={item}/>
      }
    /> */}
    <Carousel
    layout="stack"
    layoutCardOffset={7}
    data={data ? data.articles : 0}
    sliderHeight={500}
    itemHeight={Dimensions.get("window").height}
    vertical={true}
    renderItem={({ item}) => (
      <News item={item}/>
    )}
  /></View>}
    </View>
  )
}

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
 content: {
   flex:1.5,
   margin: 10
 },
});
