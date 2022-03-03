import { useNavigation } from "@react-navigation/core";
import "react-native-gesture-handler";
import React, { useState, Component, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Card from "../components/Card";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";

function Tracker() {
  const [filter, setFilter] = useState();
  function World() {
    const url = "https://api.covid19api.com/summary";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState();
    const Conf = data ? data.Global.TotalConfirmed : 0;
    const Dead = data ? data.Global.TotalDeaths : 0;
    const Active = data ? data.Global.NewConfirmed : 0;
    const recovered = Conf - Dead - Active;
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
      <View style={styles.cardContainer}>
        <Card style={styles.bottomCard1}>
          <Text style={styles.bottomCardText}>Confirmed</Text>
          <Text style={styles.number}>
            {data ? data.Global.TotalConfirmed : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard2}>
          <Text style={styles.bottomCardText2}>Active</Text>
          <Text style={styles.number2}>
            {data ? data.Global.NewConfirmed : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard3}>
          <Text style={styles.bottomCardText3}>Recovered</Text>
          <Text style={styles.number3}>{recovered}</Text>
        </Card>
        <Card style={styles.bottomCard4}>
          <Text style={styles.bottomCardText4}>Deceased</Text>
          <Text style={styles.number4}>
            {data ? data.Global.TotalDeaths : 0}
          </Text>
        </Card>
        <Card>
          <Text style={styles.graphCardText}>Spread Trend</Text>
        </Card>
        <Card>
          <LineChart
            data={{
              labels: ["Confirmed", "Active", "Recovered", "Deceased"],
              datasets: [
                {
                  data: [
                    data ? data.Global.TotalConfirmed : 0,
                    data ? data.Global.NewConfirmed : 0,
                    recovered,
                    data ? data.Global.TotalDeaths : 0,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={RFPercentage(25)}
            yAxisInterval={1}
            verticalLabelRotation={-4}
            chartConfig={{
              backgroundColor: "#fffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              barPercentage: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "cyan",
              },
            }}
            bezier
            style={{
              borderRadius: 10,
              marginBottom: -10,
            }}
          />
        </Card>
      </View>
    );
  }
  function City() {
    const url = "https://data.covid19india.org/state_district_wise.json";
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
      <View style={styles.cardContainer}>
        <Card style={styles.bottomCard1}>
          <Text style={styles.bottomCardText}>Confirmed</Text>
          <Text style={styles.number}>
            {data ? data.Maharashtra.districtData.Mumbai.confirmed : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard2}>
          <Text style={styles.bottomCardText2}>Active</Text>
          <Text style={styles.number2}>
            {data ? data.Maharashtra.districtData.Mumbai.active : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard3}>
          <Text style={styles.bottomCardText3}>Recovered</Text>
          <Text style={styles.number3}>
            {data ? data.Maharashtra.districtData.Mumbai.recovered : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard4}>
          <Text style={styles.bottomCardText4}>Deceased</Text>
          <Text style={styles.number4}>
            {data ? data.Maharashtra.districtData.Mumbai.deceased : 0}
          </Text>
        </Card>
        <Card>
          <Text style={styles.graphCardText}>Spread Trend</Text>
        </Card>
        <Card>
          <LineChart
            data={{
              labels: ["Confirmed", "Active", "Recovered", "Deceased"],
              datasets: [
                {
                  data: [
                    data ? data.Maharashtra.districtData.Mumbai.confirmed : 0,
                    data ? data.Maharashtra.districtData.Mumbai.active : 0,
                    data ? data.Maharashtra.districtData.Mumbai.recovered : 0,
                    data ? data.Maharashtra.districtData.Mumbai.deceased : 0,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={RFPercentage(25)}
            yAxisInterval={1}
            verticalLabelRotation={-4}
            chartConfig={{
              backgroundColor: "#fffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              barPercentage: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "cyan",
              },
            }}
            bezier
            style={{
              borderRadius: 10,
              marginBottom: -10,
            }}
          />
        </Card>
      </View>
    );
  }
  function State() {
    const url =
      "https://api.covid19api.com/live/country/india/status/confirmed";
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
      <View style={styles.cardContainer}>
        <Card style={styles.bottomCard1}>
          <Text style={styles.bottomCardText}>Confirmed</Text>
          <Text style={styles.number}>{data ? data[13].Confirmed : 0}</Text>
        </Card>
        <Card style={styles.bottomCard2}>
          <Text style={styles.bottomCardText2}>Active</Text>
          <Text style={styles.number2}>{data ? data[13].Active : 0}</Text>
        </Card>
        <Card style={styles.bottomCard3}>
          <Text style={styles.bottomCardText3}>Recovered</Text>
          <Text style={styles.number3}>{data ? data[13].Recovered : 0}</Text>
        </Card>
        <Card style={styles.bottomCard4}>
          <Text style={styles.bottomCardText4}>Deceased</Text>
          <Text style={styles.number4}>{data ? data[13].Deaths : 0}</Text>
        </Card>
        <Card>
          <Text style={styles.graphCardText}>Spread Trend</Text>
        </Card>
        <Card>
          <LineChart
            data={{
              labels: ["Confirmed", "Active", "Recovered", "Deceased"],
              datasets: [
                {
                  data: [
                    data ? data[13].Confirmed : 0,
                    data ? data[13].Active : 0,
                    data ? data[13].Recovered : 0,
                    data ? data[13].Deaths : 0,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={RFPercentage(25)}
            yAxisInterval={1}
            verticalLabelRotation={-4}
            chartConfig={{
              backgroundColor: "#fffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              barPercentage: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "cyan",
              },
            }}
            bezier
            style={{
              borderRadius: 10,
              marginBottom: -10,
            }}
          />
        </Card>
      </View>
    );
  }
  function Country() {
    const url = "https://api.covid19api.com/summary";
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState();
    const Conf = data ? data.Countries[77].TotalConfirmed : 0;
    const Dead = data ? data.Countries[77].TotalDeaths : 0;
    const Active = data ? data.Countries[77].NewConfirmed : 0;
    const recovered = Conf - Dead - Active;

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
      <View style={styles.cardContainer}>
        <Card style={styles.bottomCard1}>
          <Text style={styles.bottomCardText}>Confirmed</Text>
          <Text style={styles.number}>
            {data ? data.Countries[77].TotalConfirmed : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard2}>
          <Text style={styles.bottomCardText2}>Active</Text>
          <Text style={styles.number2}>
            {data ? data.Countries[77].NewConfirmed : 0}
          </Text>
        </Card>
        <Card style={styles.bottomCard3}>
          <Text style={styles.bottomCardText3}>Recovered</Text>
          <Text style={styles.number3}>{recovered}</Text>
        </Card>
        <Card style={styles.bottomCard4}>
          <Text style={styles.bottomCardText4}>Deceased</Text>
          <Text style={styles.number4}>
            {data ? data.Countries[77].TotalDeaths : 0}
          </Text>
        </Card>
        <Card>
          <Text style={styles.graphCardText}>Spread Trend</Text>
        </Card>
        <Card>
          <LineChart
            data={{
              labels: ["Confirmed", "Active", "Recovered", "Deceased"],
              datasets: [
                {
                  data: [
                    data ? data.Countries[77].TotalConfirmed : 0,
                    data ? data.Countries[77].NewConfirmed : 0,
                    recovered,
                    data ? data.Countries[77].TotalDeaths : 0,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={RFPercentage(25)}
            yAxisInterval={1}
            verticalLabelRotation={-4}
            chartConfig={{
              backgroundColor: "#fffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              barPercentage: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "cyan",
              },
            }}
            bezier
            style={{
              borderRadius: 10,
              marginBottom: -10,
            }}
          />
        </Card>
      </View>
    );
  }
  return (
    <View style={{ flex: 3, justifyContent: "center" }}>
      <SwitchSelector
        initial={0}
        textColor={"#B3B3B3"}
        selectedColor={"#c9815b"}
        buttonColor={"white"}
        fontSize={RFPercentage(2.1)}
        options={[
          { label: "Country", value: 1 },
          { label: "State", value: 2 },
          { label: "City", value: 3 },
          { label: "Worldwide", value: 4 },
        ]}
        style={styles.filter}
        onPress={(value) => setFilter(value)}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {filter === 1 ? (
          <Country />
        ) : filter === 3 ? (
          <City />
        ) : filter === 2 ? (
          <State />
        ) : filter === 4 ? (
          <World />
        ) : (
          <Country />
        )}
      </ScrollView>
    </View>
  );
}

function Symptoms() {
  return (
    <View style={{ alignContent: "center", alignSelf: "center" }}>
      <Card style={styles.symptoms}>
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            textAlign: "justify",
            fontWeight: "900",
            lineHeight: RFPercentage(5),
            margin: 20,
            color: "black",
            alignItems: "center",
          }}
        >
          ⦿ Fever or chills{"\n"}⦿ Cough{"\n"}⦿ Shortness of breath or {"\n"}
          {"  "} difficulty breathing{"\n"}⦿ Fatigue{"\n"}⦿ Muscle or body aches
          {"\n"}⦿ Headache{"\n"}⦿ New loss of taste or smell{"\n"}⦿ Sore throat
          {"\n"}⦿ Congestion or runny nose{"\n"}⦿ Nausea or vomiting{"\n"}⦿
          Diarrhea
        </Text>
      </Card>
    </View>
  );
}
const HomeScreen = () => {
  const navigation = useNavigation();
  const [showtracker, setShowTracker] = useState(true);
  const url = "https://api.covid19api.com/summary";
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
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.mainImage}
            source={require("../assets/doctor.png")}
          />
        </View>
        <View style={styles.topTextView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Safety");
            }}
          >
            <Text style={styles.topText}>
              Know safety tips{"\n"}and precautions here.
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      <Card style={styles.card2}>
        <SwitchSelector
          initial={0}
          textColor={"#c9815b"}
          selectedColor={"black"}
          buttonColor={"white"}
          backgroundColor={"#FBD8C5"}
          fontSize={RFPercentage(2.5)}
          options={[
            { label: "Tracker", value: true },
            { label: "Symptoms", value: false },
          ]}
          height={40}
          style={styles.switch}
          onPress={(value) => setShowTracker(value)}
        />
      </Card>
      {showtracker === true ? <Tracker /> : <Symptoms />}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: RFPercentage(2.7),
    backgroundColor: "white",
  },
  cardContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    justifyContent: "center",
  },
  number: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 65,
    fontWeight: "bold",
    color: "#FC1441",
  },
  number2: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 65,
    fontWeight: "bold",
    color: "#157FFB",
  },
  number3: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 65,
    fontWeight: "bold",
    color: "#30A64A",
  },
  number4: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 65,
    fontWeight: "bold",
    color: "#6D757D",
  },
  bottomCardText: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.3),
    fontWeight: "bold",
    color: "#FC1441",
  },
  bottomCardText2: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.3),
    fontWeight: "bold",
    color: "#157FFB",
  },
  bottomCardText3: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.4),
    fontWeight: "900",
    color: "#30A64A",
  },
  bottomCardText4: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.4),
    fontWeight: "900",
    color: "#6D757D",
  },
  graphCardText: {
    marginTop: Dimensions.get("window").width / 50,
    fontSize: RFPercentage(2.5),
    fontWeight: "900",
    color: "black",
    alignSelf: "center",
  },
  bottomCard1: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard2: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard3: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard4: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  graph: {
    height: Dimensions.get("window").width / 2.65,
    width: Dimensions.get("window").width / 1.1,
    backgroundColor: "white",
  },
  topText: {
    fontSize: RFPercentage(3),
    fontWeight: "800",
    flexWrap: "wrap",
  },
  topTextView: {
    flexShrink: 5,
    marginLeft: -25,
    marginTop: 20,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  filter: {
    marginTop: 5,
    marginRight: 40,
    marginLeft: 20,
    alignSelf: "center",
  },
  card: {
    width: "90%",
    height: 130,
    elevation: 1,
    flexDirection: "row",
    backgroundColor: "#CFE3FC",
    alignItems: "flex-start",
  },
  imageWrapper: {
    marginTop: -47,
    marginLeft: -20,
  },
  smallcard: {
    height: 45,
    elevation: 1,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
  },
  card2: {
    width: "90%",
    height: 50,
    elevation: 0,
    borderRadius: 50,
    backgroundColor: "#FBD8C5",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainImage: {
    resizeMode: "contain",
    height: 200,
    width: 200,
  },
  switch: {
    marginLeft: 5,
    marginRight: 5,
    elevation: 10,
  },
  selector: {
    flex: 1,
    backgroundColor: "yellow",
  },
  symptoms: {
    height: Dimensions.get("window").width / 0.74,
    width: Dimensions.get("window").width / 1.1,
    marginHorizontal: Dimensions.get("window").width / 50,
    backgroundColor: "#e8f2ff",
    alignItems: "flex-start",
    borderRadius: 20,
  },
});
