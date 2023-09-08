import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.colorWhite}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.colorWhite}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.colorWhite}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.colorWhite}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.colorWhite}>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.colorWhite}>...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    colorWhite: {color: 'white'},
    headingText: {
      color: 'white',
      fontSize: 24,
    },
    container: {
        padding: 8,
    },
    
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        borderRadius: 4,

    },
    cardElevated: {
        backgroundColor: '#cad5e2',
        elevation: 4,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#ef5354',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    }
  })