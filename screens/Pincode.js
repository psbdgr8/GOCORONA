import { useNavigation } from '@react-navigation/core';
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { darkModeContext } from '../API/Context';

const Pincode = () => {
  const [isDarkMode] = useContext(darkModeContext);
    const [pincode, setPincode] = useState('');
    const navigation = useNavigation();
    const txtHandler = (enteredPincode) => {
      setPincode(enteredPincode);
    };
    const btnHandler = () => {
      Keyboard.dismiss();
      navigation.navigate("Search",
      {pincode: pincode});
    };
  
    return (
      <View style={{backgroundColor: isDarkMode === true ? "black" : "white", ...styles.container}}>
        <TextInput
          style={{borderColor: isDarkMode === true ? "blue" : "black", ...styles.input}}
          placeholder="Enter your Pincode"
          placeholderTextColor={isDarkMode === true ? "white" : "black"}
          value={pincode}
          color={isDarkMode === true ? "white" : "black"}
          keyboardType='number-pad'
          onChangeText={txtHandler}
        />
        <Button title="Submit" onPress={btnHandler} style={styles.button} />
        <View style={styles.result}>
          <Text style={{color: isDarkMode === true? "white" : "black", ...styles.text}}>
            {pincode !== ''
              ? `Your Pincode is ${pincode} click on Submit to find available slots`
              : 'Please enter your pincode'}
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex:1,
        flexGrow:1,
      alignItems: 'center',
      justifyContent: "center",
    },
    button:{
        height: 20
    },
    text: {
      fontSize: RFPercentage(3),
    },
    input: {
      padding: 10,
      width: 220,
      fontSize: 18,
      marginBottom:18,
      borderWidth: 1,
      borderRadius: 50,
    },
    result: {
      marginTop: 30,
      paddingHorizontal: 30,
      display: 'flex',
    }
  });
 

export default Pincode
