import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.text}>🚀</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowColor: '#333',
  },
  text: {
    color: 'black'
  }
});
