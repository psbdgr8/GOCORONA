import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/core";

const NewsScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>NewsScreen</Text>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({})