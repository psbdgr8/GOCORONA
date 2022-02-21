import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from "react-native";
import Card from "../components/Card";

const HomeScreen = () => {
  const navigation = useNavigation();
  var [isPress, setIsPress] = React.useState(false);

  var touchProps = {
    activeOpacity: 1,
    underlayColor: "blue", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image
          style={styles.mainImage}
          source={require("../assets/doctor.png")}
        />
      </Card>
      <Card style={styles.card2}>
        <TouchableOpacity>
          <Card style={styles.smallcard}>
            <Text>Tracker</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.smallcard}>
            <Text>Symptoms</Text>
          </Card>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    backgroundColor: "white",
  },
  card: {
    width: "90%",
    height: 130,
    elevation: 1,
    borderRadius: 25,
    backgroundColor: "#CFE3FC",
    justifyContent: "center",
  },
  smallcard: {
    height: 45,
    elevation: 1,
    borderRadius: 25,
    backgroundColor: "#CFE3FC",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
  },
  card2: {
    width: "90%",
    height: 65,
    elevation: 1,
    borderRadius: 50,
    backgroundColor: "#FBD8C5",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainImage: {
    resizeMode: "contain",
    height: 200,
    width: 200,
    marginBottom: 25,
    marginLeft: -30,
  },
});
