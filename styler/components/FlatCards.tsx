import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={[styles.colorWhite]}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={[styles.colorWhite]}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={[styles.colorWhite]}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  colorWhite: {color: 'white'},
  headingText: {
    color: 'white',
    fontSize: 24,
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3fa',
  },
});
