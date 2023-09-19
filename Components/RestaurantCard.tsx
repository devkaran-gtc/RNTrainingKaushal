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

interface Props {
  name: string;
  onPress: (name:string) => void;
}

const RestaurantCard: React.FC<Props> = ({name,onPress}) => {
  return (
    <TouchableOpacity onPress={()=>{onPress(name)}}>
      <View style={styles.container}>
        <Text style={{color: 'black'}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#777',
    borderRadius: 10,
    padding: 16,
    marginTop: 8,
  },
});

export default RestaurantCard;
