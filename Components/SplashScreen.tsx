import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Splash from 'react-native-splash-screen';
import Svg, {Image} from 'react-native-svg';

const SplashScreen = ({}) => {
  /*  useEffect(() => {
    setTimeout(() => {
      Splash.hide();
      navigation.navigate('Home'); // Navigate to your main screen after the splash screen.
    }, 3000); // 3000ms = 3 seconds
  }, []); */

  return (
    <LinearGradient
      colors={['#4552CB', '#4596EA']}
      style={styles.container}
      start={{x: 0.1, y: 0.3}}
      end={{x: 1.0, y: 0.7}}>
      <View style={styles.textContainer}>
        {/* <Svg width={200} height={200}>
          <Image
            width="100%"
            height="100%"
            href={require('/Assets/icon_1.svg')}
          />
        </Svg> */}

        <Text style={styles.text}>Pet Care</Text>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});
