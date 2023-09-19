import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RestaurantCard from '../Components/RestaurantCard';
import Menu from '../Components/Menu';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import TopDrawerNavigator from '../Components/TopDrawerNavigator';

type Props = NativeStackNavigationProp<RootStackParams, 'RestaurantsStack'>;

const Resturants = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Resturants Screen</Text>

      <ScrollView>
        <RestaurantCard
          name="prime restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="modest restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="silver perl restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="prime restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="modest restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="silver perl restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    color: 'black',
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default Resturants;
