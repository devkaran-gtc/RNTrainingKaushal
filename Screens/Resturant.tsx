import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RootStackParams} from '../App';
import RestaurantCard from '../Components/RestaurantCard';
import TopBackNavigation from '../Components/TopBackNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

const Resturant = ({route, navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopBackNavigation />
      <Text style={styles.screenTitle}>{route.params.name}</Text>
      <Text style={{color: 'black'}}>Related restaurents</Text>
      <RestaurantCard
        name="Sushi 1"
        onPress={() => {
          navigation.push('Restaurant', {name: 'Sushi 1'});
        }}
      />
      <RestaurantCard
        name="Sushi 2"
        onPress={() => {
          navigation.push('Restaurant', {name: 'Sushi 2'});
        }}
      />
      <RestaurantCard
        name="Sushi 3"
        onPress={() => {
          navigation.push('Restaurant', {name: 'Sushi 3'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Resturant;
