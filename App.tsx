import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import MainScreen from './Components/Main';


const Stack = createNativeStackNavigator();

const commonScreenOptions = {
  headerStyle: {
    backgroundColor: '#777',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const App = () => {

  const btnAction = () =>{
    console.warn("btn pressed");
  }


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={commonScreenOptions}>
        <Stack.Screen
          name="Splash"
          options={{
            title: 'Splash Screen',
            headerTitle: () => <Button title="left" onPress={btnAction} />,
            headerRight: () => <Button title="Right" onPress={btnAction} />,
          }}>
          {props => <SplashScreen navigation={props.navigation} />}
        </Stack.Screen>

        <Stack.Screen name="Main" options={{title: 'Main Screen'}}>
          {props => <MainScreen navigation={props.navigation} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Bottom Navigation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
