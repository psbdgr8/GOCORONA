import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions, FlatList} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import Card from '../components/Card';
import StateItemRows from '../components/StateItemRows';
import { darkModeContext } from '../API/Context';

const StatesOfIndiaScreen = () => {
    const url = "https://api.covid19api.com/live/country/india/status/confirmed";
    const [data, setData] = useState();
    const[isDarkMode] = useContext(darkModeContext);
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
        data={data && data ?  data : 0}
        renderItem={({item})=> <StateItemRows item={item}/>}
        keyExtractor={(item, index) => index.toString()}
    />}
    </View>
  )
}

export default StatesOfIndiaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1
    },
    content: {
        flex: 1.5,
        backgroundColor: "white",
        flexGrow: 1
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "brown"
    },
    confirmed: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: "red",
        margin: 10,
        marginLeft: 20,
    },
    death: {
        marginTop: 0,
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: "gray",
        marginLeft: 20,
    },
   
})