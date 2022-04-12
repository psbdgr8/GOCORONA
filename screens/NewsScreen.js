import { StyleSheet, Text, View, Dimensions, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigation } from "@react-navigation/core";
import News from "../components/News";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {darkModeContext} from "../API/Context"
const NewsScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode] = useContext(darkModeContext);
  const url =
    "https://newsapi.org/v2/everything?q=coronavirus%covid&sortBy=popularity&language=en&apiKey=74475e7b2056458b89758418414e5621";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error,setError] = useState();
    const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
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
      <View style={{
        backgroundColor: isDarkMode === true ? "black" : "white", ...styles.container}}>
        {isLoading === true ? <ActivityIndicator size={"large"} 
        color={"cyan"} paddingTop={Dimensions.get("window").height/1.3}/> :
        <View style={styles.content}>
        {/* <FlatList 
        data={data && data.articles ?  data.articles : 0}
        renderItem={({item})=> <News item={item}/>
      }
    /> */}
    <Carousel
    layout="default"
    layoutCardOffset={10}
    ref={isCarousel}
    autoplay={true}
    autoplayDelay={1000}
    autoplayInterval={8000}
    loop
    data={data ? data.articles : 0}
    sliderWidth={Dimensions.get("window").width}
    itemWidth={Dimensions.get("window").width}
    onSnapToItem={(index) => setIndex(index)}
    renderItem={({ item}) => (
      <News item={item}/>
    )}
    keyExtractor={(item, index) => index.toString()}
  /><Pagination
  dotsLength={data? data.articles.length : 0}
  activeDotIndex={index}
  carouselRef={isCarousel}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    color:"blue",
    backgroundColor: isDarkMode === true? "white" : "gray"
  }}
  inactiveDotOpacity={0.4}
  inactiveDotScale={0.6}
  tappableDots={true}
  />
  </View>}
    </View>
  )
}

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 content: {
   flex:1.5
 },
});
