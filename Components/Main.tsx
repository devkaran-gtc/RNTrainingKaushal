import {View, Text, StyleSheet,Button} from 'react-native';

interface Props {
  navigation: any
}

const MainScreen = ({ navigation }: Props)  => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Main</Text>
        <Button title='go to home' onPress={goToHome}/>
    </View>
  );
};

export default MainScreen;

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
