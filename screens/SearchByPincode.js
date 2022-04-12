import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  FlatList,
} from "react-native";
import React, { useState,useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import VaccineByPincode from "./VaccineByPincode";
import { darkModeContext } from "../API/Context";

const SearchByPincode = ({route}) => {
  const {pincode} = route.params;
  const [isDarkMode] = useContext(darkModeContext);
  const navigation = useNavigation();
  const date = new Date().getDate();
  const month = new Date().getMonth()+1;
  const year = new Date().getFullYear();
  const url =
  "https://cdn-api.co-vin.in/api/v4/appointment/sessions/public/calendarByPin?pincode="
  +pincode+"&date="+date+"-"+month+"-"+year;
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
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
    <SafeAreaView style={{backgroundColor: isDarkMode === true ? "black" : "white", ...styles.container}}>
      <View>
        {isLoading === true ? (
          <ActivityIndicator
            size={"large"}
            color={"cyan"}
            paddingTop={Dimensions.get("window").height / 2}
          />
        ) : (
          <FlatList
            data={data && data ? data.centers : 0}
            renderItem={({ item }) => <VaccineByPincode item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchByPincode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  textInput: {
    height: 40,
    backgroundColor: "azure",
    fontSize: 20,
  },
});
