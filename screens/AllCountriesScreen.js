import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import Card from '../components/Card';
import ItemRows from '../components/ItemsRow';

const AllCountriesScreen = () => {
    const url = "https://api.covid19api.com/summary";
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
        color={"cyan"} paddingTop={Dimensions.get("window").height/2}/> :
        <FlatList 
        data={data && data.Countries ?  data.Countries : 0}
        renderItem={({item})=> <ItemRows item={item}/>}
    />}
    </View>
  )
}

export default AllCountriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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