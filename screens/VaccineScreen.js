import { useNavigation } from "@react-navigation/core";
import React, { useEffect,useContext, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { darkModeContext } from "../API/Context";
import AvailableVaccine from "./AvailableVaccine";

const VaccineScreen = ({ route }) => {
  const navigation = useNavigation();
  const [isDarkMode] = useContext(darkModeContext);
  const { cityId } = route.params;
  const date = new Date().getDate();
  const month = new Date().getMonth()+1;
  const year = new Date().getFullYear();
  const url =
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+cityId+"&date="+date+"-"+month+"-"+year;
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchCovidData = async () => {
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
    fetchCovidData();
  }, []);

  return (
    <View style={{backgroundColor: isDarkMode === true ? "black" : "white",...styles.container}}>
      {isLoading === true ? (
        <ActivityIndicator
          size={"large"}
          color={"cyan"}
          paddingTop={Dimensions.get("window").height / 2}
        />
      ) : (
        <FlatList
          data={data && data ? data.sessions : 0}
          renderItem={({ item }) => <AvailableVaccine item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default VaccineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    
  },
});
