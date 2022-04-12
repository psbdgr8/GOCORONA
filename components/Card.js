import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 50,
    alignItems:'center',
  },
});

export default Card;
