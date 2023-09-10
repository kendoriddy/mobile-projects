import React from 'react';
import {View, StyleSheet} from 'react-native';

const Shape = ({color}) => {
  return <View style={[styles.shape, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  shape: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default Shape;
