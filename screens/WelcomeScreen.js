import { Image, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {  SafeAreaView } from 'react-native-web'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        source={require('../assets/home.png')}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainer2}>
          <Text style={styles.title}>
            Be aware {"\n"}
            Stay healthy
            </Text>
          </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CFE3FC"
        
    },
    mainImage: {
     height: Dimensions.get("window").height /1.3,
     width: Dimensions.get('window').width,
    },
    bottomContainer: {
      flex: 1.5,
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
      backgroundColor: "white",
      marginTop: -40
    },
    bottomContainer2: {
      padding: 20
    },
    title: {
      fontSize: 40
    },
})

export default WelcomeScreen