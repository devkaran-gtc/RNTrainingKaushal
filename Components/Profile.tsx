import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>profile SCREEN</Text>
    </View>
  );
}

export default ProfileScreen;
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