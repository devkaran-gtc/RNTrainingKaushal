import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {RootStackParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  name: string;
}

const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          // go to explore
          navigation.navigate('ExploreStack');
        }}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // go to Restaurants
          navigation.navigate('RestaurantsStack');
        }}>
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // go to Profile
          navigation.navigate('Profile');
        }}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
});

export default Menu;
