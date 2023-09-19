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
import TopDrawerNavigator from '../Components/TopDrawerNavigator';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text style={styles.nameTxt}>Name: Kaushal Darji</Text>
      <TouchableOpacity style={styles.editProfileBtn}>
        <Text style={{color:'#f5f5f5',fontSize:16}}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    color: 'black',
    marginTop: 8,
    fontWeight: 'bold',
  },
  nameTxt: {
    color: 'black',
    marginTop: 5,
    fontSize:15
  },
  editProfileBtn: {
    backgroundColor: '#777',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 15,
  },
});

export default Profile;
