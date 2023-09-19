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
import {Screen} from 'react-native-screens';
import TopDrawerNavigator from '../Components/TopDrawerNavigator';

type Props = NativeStackNavigationProp<RootStackParams, 'ExploreStack'>;

const Explore = ({navigation}: Props) => {
  return (
    <View style={styles.container}>

      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.selectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="prime restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'prime restaurant'});
            // navigation.navigate('RestauantsStack', {
            //   screen: 'Restaurant',
            //   params: {name: 'Hello from Explore'},
            // });
          }}
        />
        <RestaurantCard
          name="modest restaurant"
          onPress={() => {
            navigation.navigate('Restaurant', {name: 'modest restaurant'});
          }}
        />
        <RestaurantCard
          name="silver perl restaurant"
          onPress={() => {
            navigation.navigate('Restaurant', {name: 'silver perl restaurant'});
          }}
        />

        <Text style={styles.selectionTitle}>Most Popular Rrestaurants</Text>
        <RestaurantCard
          name="prime restaurant"
          onPress={() => {
            navigation.push('Restaurant', {name: 'prime restaurant'});
          }}
        />
        <RestaurantCard
          name="modest restaurant"
          onPress={() => {
            navigation.navigate('Restaurant', {name: 'modest restaurant'});
          }}
        />
        <RestaurantCard
          name="silver perl restaurant"
          onPress={() => {
            navigation.navigate('Restaurant', {name: 'silver perl restaurant'});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  resturantCard: {
    backgroundColor: '#efefef',
  },
  selectionTitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    color: 'black',
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default Explore;
