import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button,Image } from "react-native";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

export default function App() {
  const [modelIsVisible, setModelVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);

  function startAddTaskHandler() {
    setModelVisibility(true);
  }

  function endAddTaskHandler() {
    setModelVisibility(false);
  }

  /* function taskInputHandler(enterdText) {
    setEnteredTaskText(enterdText);
  } */

  function addTaskHandler(text, day) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: text, day: day },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.btn}>
      <Button
        title="Add new Task"
        color={"#777"}
        onPress={startAddTaskHandler}
      />
      </View>
      

      {modelIsVisible && (
        <AddTask visible={modelIsVisible} onAddTask={addTaskHandler} onCancle={endAddTaskHandler} />
      )}

      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemTask) => {
            return (
              <Task
                day={itemTask.item.day}
                text={itemTask.item.text}
                id={itemTask.item.id}
                onDeleteTask={deleteTaskHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor:"#f5f5f5"
  },
  btn:{
    marginBottom:10
  }
});
