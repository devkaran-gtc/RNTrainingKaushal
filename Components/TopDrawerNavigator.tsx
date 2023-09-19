import {useNavigation,DrawerActions} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import MenuIcon from '../icons/MenuIcon';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParams } from '../App';

const TopDrawerNavigator = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#f0ddcc"
        onPress={() => {
           navigation.openDrawer();
        }}>
        <MenuIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopDrawerNavigator;
