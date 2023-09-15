import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Components/Home';
import ProfileScreen from './Components/Profile';
import Other from './Components/Other';
import Settings from './Components/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Other"
          component={Other}
        />

        <Tab.Screen
          options={{headerShown: false}}
          name="Setting"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
