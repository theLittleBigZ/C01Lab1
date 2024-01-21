import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialTasks }) => {
    const [toDos, setToDos] = useState(
      initialTasks.map((title) => ({ id: uuidv4(), title }))
    );
  
    const addToDo = (newTitle) => {
      setToDos((prevToDos) => [...prevToDos, { id: uuidv4(), title: newTitle }]);
    };
  
    const removeToDo = (id) => {
      setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
    };
  
    return (
      <View style={styles.container}>
        {toDos.map((toDo) => (
          <View key={toDo.id} style={styles.todoItem}>
            <Text>{toDo.title}</Text>
            <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
          </View>
        ))}
        <AddTask onAddTask={addToDo} />
      </View>
    );
  };
  
  ToDoList.defaultProps = {
    initialTasks: [],
  };

  const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;