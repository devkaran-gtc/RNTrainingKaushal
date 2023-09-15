import React, {useEffect} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';


interface Props {
  navigation: any
}

const SplashScreen = ({ navigation }: Props)  => {
  const goToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
        <Button title='go' onPress={goToMain}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#777',
    marginBottom:15
  },
});
