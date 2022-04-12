import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import React, { useState, useContext, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Card from "../components/Card";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkModeContext } from "../API/Context";

function Tracker() {
  const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
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
      <View>
        {isLoading === true ? (
          <ActivityIndicator
            size={"large"}
            color={"cyan"}
            paddingTop={Dimensions.get("window").height / 2}
          />
        ) : (
          <View
            style={{
              backgroundColor: isDarkMode === true ? "black" : "white",
              ...styles.cardContainer,
            }}
          >
            <Card
              style={{borderColor: isDarkMode === true ?"#FC1441" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard1,
              }}
            >
              <Text style={styles.bottomCardText}>Confirmed</Text>
              <Text style={styles.number}>
                {data ? data.Global.TotalConfirmed : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#157FFB" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard2,
              }}
            >
              <Text style={styles.bottomCardText2}>Active</Text>
              <Text style={styles.number2}>
                {data ? data.Global.NewConfirmed : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#30A64A" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard3,
              }}
            >
              <Text style={styles.bottomCardText3}>Recovered</Text>
              <Text style={styles.number3}>{recovered}</Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#6D757D" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard4,
              }}
            >
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
                  backgroundColor: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientFrom: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientTo: isDarkMode === true ? "black" : "#ffffff",
                  decimalPlaces: 0,
                  barPercentage: 1,
                  color: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
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
        )}
      </View>
    );
  }
  function City() {
    const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
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
      <View>
        {isLoading === true ? (
          <ActivityIndicator
            size={"large"}
            color={"cyan"}
            paddingTop={Dimensions.get("window").height / 2}
          />
        ) : (
          <View style={styles.cardContainer}>
            <Card
              style={{borderColor: isDarkMode === true ?"#FC1441" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard1,
              }}
            >
              <Text style={styles.bottomCardText}>Confirmed</Text>
              <Text style={styles.number}>
                {data ? data.Maharashtra.districtData.Mumbai.confirmed : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#157FFB" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard2,
              }}
            >
              <Text style={styles.bottomCardText2}>Active</Text>
              <Text style={styles.number2}>
                {data ? data.Maharashtra.districtData.Mumbai.active : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#30A64A" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard3,
              }}
            >
              <Text style={styles.bottomCardText3}>Recovered</Text>
              <Text style={styles.number3}>
                {data ? data.Maharashtra.districtData.Mumbai.recovered : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#6D757D" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard4,
              }}
            >
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
                        data
                          ? data.Maharashtra.districtData.Mumbai.confirmed
                          : 0,
                        data ? data.Maharashtra.districtData.Mumbai.active : 0,
                        data
                          ? data.Maharashtra.districtData.Mumbai.recovered
                          : 0,
                        data
                          ? data.Maharashtra.districtData.Mumbai.deceased
                          : 0,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get("window").width}
                height={RFPercentage(25)}
                yAxisInterval={1}
                verticalLabelRotation={-4}
                chartConfig={{
                  backgroundColor: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientFrom: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientTo: isDarkMode === true ? "black" : "#ffffff",
                  decimalPlaces: 0,
                  barPercentage: 1,
                  color: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
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
        )}
      </View>
    );
  }
  function State() {
    const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
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
      <View>
        {isLoading === true ? (
          <ActivityIndicator
            size={"large"}
            color={"cyan"}
            paddingTop={Dimensions.get("window").height / 2}
          />
        ) : (
          <View style={styles.cardContainer}>
            <Card
              style={{borderColor: isDarkMode === true ?"#FC1441" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard1,
              }}
            >
              <Text style={styles.bottomCardText}>Confirmed</Text>
              <Text style={styles.number}>{data ? data[13].Confirmed : 0}</Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#157FFB" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard2,
              }}
            >
              <Text style={styles.bottomCardText2}>Active</Text>
              <Text style={styles.number2}>{data ? data[13].Active : 0}</Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#30A64A" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard3,
              }}
            >
              <Text style={styles.bottomCardText3}>Recovered</Text>
              <Text style={styles.number3}>
                {data ? data[13].Recovered : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#6D757D" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard4,
              }}
            >
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
                  backgroundColor: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientFrom: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientTo: isDarkMode === true ? "black" : "#ffffff",
                  decimalPlaces: 0,
                  barPercentage: 1,
                  color: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
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
        )}
      </View>
    );
  }
  function Country() {
    const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
    const url = "https://api.rootnet.in/covid19-in/stats/latest";
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
      <View>
        {isLoading === true ? (
          <ActivityIndicator
            size={"large"}
            color={"cyan"}
            paddingTop={Dimensions.get("window").height / 2}
          />
        ) : (
          <View style={styles.cardContainer}>
            <Card
              style={{borderColor: isDarkMode === true ?"#FC1441" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard1,
              }}
            >
              <Text style={styles.bottomCardText}>Confirmed</Text>
              <Text style={styles.number}>
                {data ? data.data["unofficial-summary"][0].total : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#157FFB" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard2,
              }}
            >
              <Text style={styles.bottomCardText2}>Active</Text>
              <Text style={styles.number2}>
                {data ? data.data["unofficial-summary"][0].active : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#30A64A" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard3,
              }}
            >
              <Text style={styles.bottomCardText3}>Recovered</Text>
              <Text style={styles.number3}>
                {data ? data.data["unofficial-summary"][0].recovered : 0}
              </Text>
            </Card>
            <Card
              style={{borderColor: isDarkMode === true ?"#6D757D" : "", borderWidth: isDarkMode === true? 2 : 0,
                backgroundColor: isDarkMode === true ? "black" : "#E8F2FF",
                ...styles.bottomCard4,
              }}
            >
              <Text style={styles.bottomCardText4}>Deceased</Text>
              <Text style={styles.number4}>
                {data ? data.data["unofficial-summary"][0].deaths : 0}
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
                        data ? data.data["unofficial-summary"][0].total : 0,
                        data ? data.data["unofficial-summary"][0].active : 0,
                        data ? data.data["unofficial-summary"][0].recovered : 0,
                        data ? data.data["unofficial-summary"][0].deaths : 0,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get("window").width}
                height={RFPercentage(25)}
                yAxisInterval={1}
                verticalLabelRotation={-4}
                chartConfig={{
                  backgroundColor: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientFrom: isDarkMode === true ? "black" : "#ffffff",
                  backgroundGradientTo: isDarkMode === true ? "black" : "#ffffff",
                  decimalPlaces: 0,
                  barPercentage: 1,
                  color: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode === true ? `rgba(250, 250, 250, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
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
        )}
      </View>
    );
  }
  return (
    <View style={{ flex: 3, justifyContent: "center" }}>
      <SwitchSelector
        initial={0}
        backgroundColor={isDarkMode === true ? "black" : "white"}
        textColor={isDarkMode === true ? "white" : "#B3B3B3"}
        selectedColor={isDarkMode === true ? "red" :"#c9815b"}
        buttonColor={isDarkMode === true ? "black" : "white"}
        fontSize={RFPercentage(1.6)}
        options={[
          { label: "India", value: 1 },
          { label: "Maharashtra", value: 2 },
          { label: "Mumbai", value: 3 },
          { label: "World", value: 4 },
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
  const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
  return (
    <View style={{ alignContent: "center", alignSelf: "center" }}>
      <Card style={{backgroundColor: isDarkMode === false ?  "#e8f2ff"  : "black", ...styles.symptoms}}>
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            textAlign: "justify",
            fontWeight: "900",
            lineHeight: RFPercentage(5),
            margin: 20,
            color: isDarkMode === true ? "white" : "black",
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
  const [isDarkMode, setIsDarkMode] = useContext(darkModeContext);
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
    <View
      style={{
        backgroundColor: isDarkMode === true ? "black" : "white",
        ...styles.container,
      }}
    >
      <Card style={{backgroundColor: isDarkMode === true ? "black" : "#CFE3FC",
      borderColor: isDarkMode === true ? "purple" : "", borderWidth: isDarkMode === true ? 2: 0,
      ...styles.card}}>
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
            <Text style={{color: isDarkMode ===true ? "white" : "black",...styles.topText}}>
              Know safety tips{"\n"}and precautions here.
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      <Card style={{backgroundColor: isDarkMode === true ? "black" : "#FBD8C5",borderColor: isDarkMode === true ? "green" : "", borderWidth: isDarkMode === true ? 0 : 0,
       ...styles.card2}}>
        <SwitchSelector
          initial={0}
          textColor={isDarkMode === true ? "cyan" : "#c9815b"}
          selectedColor={isDarkMode === true ? "white" : "black"}
          buttonColor={isDarkMode === true ? "black" : "white"}
          backgroundColor={isDarkMode === true ? "#202020" : "#FBD8C5"}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: RFPercentage(2.7),
  },
  cardContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  number: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 55,
    fontWeight: "bold",
    color: "#FC1441",
  },
  number2: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 55,
    fontWeight: "bold",
    color: "#157FFB",
  },
  number3: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 55,
    fontWeight: "bold",
    color: "#30A64A",
  },
  number4: {
    fontSize: RFPercentage(3),
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 55,
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
    fontSize: RFPercentage(2.5),
    fontWeight: "900",
    color: "#30A64A",
  },
  bottomCardText4: {
    marginLeft: Dimensions.get("window").width / 20,
    marginTop: Dimensions.get("window").width / 33,
    fontSize: RFPercentage(2.5),
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
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard2: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard3: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
    alignItems: "flex-start",
    borderRadius: 20,
  },
  bottomCard4: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 2.3,
    marginHorizontal: Dimensions.get("window").width / 50,
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
    marginRight: 10,
    marginLeft: 10,
    alignSelf: "center",
  },
  card: {
    width: "90%",
    height: 130,
    elevation: 1,
    flexDirection: "row",
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
    alignItems: "flex-start",
    borderRadius: 20,
  },
});
export default HomeScreen;
