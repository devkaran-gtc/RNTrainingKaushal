import React from 'react'
import { StyleSheet, Text } from 'react-native'

const t3 = () => {
  return (
    <Text style={styles.text}> bottom tab-1</Text>
  )
}

export default t3

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      color: '#777',
    },
  });