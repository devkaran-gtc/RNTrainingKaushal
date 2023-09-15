import React from 'react'
import { StyleSheet, Text } from 'react-native'

const t2 = () => {
  return (
    <Text style={styles.text}> bottom tab-2</Text>
  )
}

export default t2

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      color: '#777',
    },
  });