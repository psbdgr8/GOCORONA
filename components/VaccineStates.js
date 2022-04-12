import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useContext, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
  Touchable,
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler'
import Vaccine from "./Vaccine";
import VaccineDistrict from "./VaccineDistrict";
import { darkModeContext } from "../API/Context";

const VaccineStates = ({route}) => {
 
  const navigation = useNavigation();
  const { id } = route.params;
  const [isDarkMode] = useContext(darkModeContext);
  const url = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+id;
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
    <View style={{backgroundColor: isDarkMode === true ? "black" : "white", ...styles.container}}>
      {isLoading === true ? <ActivityIndicator size={"large"} 
      color={"cyan"} paddingTop={Dimensions.get("window").height/2}/> :
      <FlatList 
      data={data && data ? data.districts : 0}
      renderItem={({item})=> <VaccineDistrict item={item}/>}
      keyExtractor={(item, index) => index.toString()}
  />}
  </View>
)
}

export default VaccineStates

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityName: {
    fontSize: 30,
    margin: 20,
    color: "black",
  },
})