import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import t1 from './t1';
import t2 from './t2';
import t3 from './t3';
import t4 from './t4';

const Tab = createBottomTabNavigator();



const Home = () => {
  return (
    <View >
        <Tab.Navigator >
      <Tab.Screen name="t1" component={t1} />
      <Tab.Screen name="t2" component={t2} />
      <Tab.Screen name="t3" component={t3} />
      <Tab.Screen name="t4" component={t4} />
    </Tab.Navigator>
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