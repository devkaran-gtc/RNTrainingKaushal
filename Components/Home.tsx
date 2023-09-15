import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home SCREEN</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#777',
  },
});