import React from "react";

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
  FlatList,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.task} >
      <Pressable android_ripple={{color:"#dddddd"}} onPress={props.onDeleteTask.bind(this,props.id)}>
        <Text style={{ fontSize: 16 }}>{props.text}</Text>
        <Text style={{ fontSize: 12, marginTop: 2 }}>{props.day}</Text>
      </Pressable>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    borderWidth: 1,
    borderColor: "#cccccc",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 25,
    borderRadius: 25,
    paddingVertical: 3,
    marginBottom: 10,
  },
});
