import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions, FlatList} from 'react-native'
import React, {useState,useContext, useEffect} from 'react'
import Vaccine from '../components/Vaccine';
import { darkModeContext } from '../API/Context';

const VaccineStatusScreen = () => {
    const url = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
    const [data, setData] = useState();
    const [isDarkMode] =useContext(darkModeContext);
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
      <View style={{backgroundColor: isDarkMode === true? "black" : "white", ...styles.container}}>
        {isLoading === true ? <ActivityIndicator size={"large"} 
        color={"cyan"} paddingTop={Dimensions.get("window").height/2}/> :
        <FlatList 
        data={data ? data.states : 0}
        renderItem={({item})=> <Vaccine item={item}/>}
        keyExtractor={(item, index) => index.toString()}
        
    />}
    </View>
  )
}

export default VaccineStatusScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1
    },
   
})