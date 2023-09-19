import React from 'react';
import {StyleSheet} from 'react-native';

import Explore from './Screens/Explore';
import Profile from './Screens/Profile';
import Restaurants from './Screens/Resturants';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Restaurant from './Screens/Resturant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from './icons/ExploreIcon';
import RestaurantIcon from './icons/RestaurantIcon';
import ProfileIcon from './icons/ProfileIcon';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{headerShown: false}}>
      <RestaurantsStack.Screen name="Restaurants" component={Restaurants} />
      <RestaurantsStack.Screen name="Restaurant" component={Restaurant} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Restaurant" component={Restaurant} />
    </ExploreStack.Navigator>
  );
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="ExploreStack"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e67a15',
          tabBarInactiveTintColor: 'gray',
        }}>
        <RootStack.Screen
          name="ExploreStack"
          component={ExploreScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            tabBarLabel: 'Explore',
          }}
        />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <RestaurantIcon color={color} size={size} />
            ),
            tabBarLabel: 'Restaurants',
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});

export default App;
