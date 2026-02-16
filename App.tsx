/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text, FlatList } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Header } from './src/components/header/Header';
import { Footer } from './src/components/Footer/Footer';
import { ToDoInput } from './src/components/ToDoInput/ToDoInput';
import { useState } from 'react';
import { testToDos, ToDoItem } from './ToDoItem';
import uuid from 'react-native-uuid';
import { ToDoList } from './src/components/ToDoList/ToDoList';

function App() {
  // Dev
  //const [ToDos, setToDos] = useState<ToDoItem[]>(testToDos);
  // Production
  const [ToDos, setToDos] = useState<ToDoItem[]>([]);

  const isDarkMode = useColorScheme() === 'dark';

  const addToDoItem = (text: string) => {
    if(text === ' '){
      console.log("Empty string");
      return;
    }

    const toDoItem: ToDoItem = {
      id: uuid.v4(),
      title: text,
      completed: false,
    };
    const nToDos = [toDoItem, ...ToDos];
    setToDos(nToDos);
    console.log(`addToDoItem called with ${text} state: ${JSON.stringify(nToDos)}`);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="#3498db" />

      {/* Header */}
      <Header title='To-do app'/>

      {/* Content area */}
      <View style={styles.content}>
        <View style={styles.contentUpper}>
          <ToDoInput addToDoItem={addToDoItem}/>
        </View>

        <View style={styles.contentLower}>
          <ToDoList toDos={ToDos} listHeaderText='Your to-do list' emptyListText='Add things to do'/>
        </View>
      </View>

      {/* Footer */}
      <Footer cr='Niklas Krogell' year={2026}/>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  contentUpper: {
    flex: 1,
    width: "100%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  contentLower: {
    flex: 3,
    width: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default App;
