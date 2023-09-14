import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
  Pressable,
  Modal,
  Image
} from "react-native";

const AddTask = ({ onAddTask, visible ,onCancle}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const addTaskHandler = () => {
    if (text.trim() !== "" && day.trim() !== "") {
      onAddTask(text, day);
      setText("");
      setDay("");
    } else {
      ToastAndroid.show("fileds are empty", ToastAndroid.SHORT);
    }
  };

  return (
    <Modal visible={visible.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Task Tracker</Text>
          <Button title="Cancle" color={"green"} onPress={onCancle}/>
        </View>

        <Text style={styles.inputLabel}>Task</Text>
        <TextInput
          style={styles.textInput}
          value={text}
          placeholder="add task to do!"
          onChangeText={(e) => setText(e)}
        />
        <Text style={styles.inputLabel}>Day & Time</Text>

        <TextInput
          style={styles.textInput}
          value={day}
          placeholder="add day & time"
          onChangeText={(e) => setDay(e)}
        />
        <Pressable onPress={addTaskHandler}>
          <View style={styles.btn}>
            <Text style={{ fontSize: 18, color: "#f7f7f7" }}>Add Task</Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
  },
  headerContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
    alignItems: "center",
  },

  inputContainer: {
    // flex: 2,
    flex:1,
    paddingHorizontal: 25,
    flexDirection: "coloumn",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor:"#f5f5f5"
  },
  inputLabel: {
    fontSize: 12,
  },
  setReminderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "flex-start",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    fontSize: 16,
    color: "black",
    marginBottom: 15,
    marginTop: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    paddingVertical: 4,
  },

  btn: {
    backgroundColor: "green",
    fontSize: 20,
    paddingHorizontal: 25,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingVertical: 8,
    marginBottom: 10,
    alignItems: "center",
  },
});
