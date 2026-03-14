/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Header } from './src/components/header/Header';
import { Footer } from './src/components/Footer/Footer';
import { ToDoInput } from './src/components/ToDoInput/ToDoInput';
import { useEffect, useState } from 'react';
import { testToDos, ToDoItem } from './ToDoItem';
import uuid from 'react-native-uuid';
import { ToDoList } from './src/components/ToDoList/ToDoList';
import { FilterBar } from './src/components/Filters/FilterBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  // Dev
  // const [toDos, setToDos] = useState<ToDoItem[]>(testToDos);
  // Production
  const [toDos, setToDos] = useState<ToDoItem[]>([]);

  // State for loading so the toDos state doesnt change until data is loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Selected filter
  const [selectedFilter, setSelectedFilter] = useState<String>("ALL");

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
    const nToDos = [toDoItem, ...toDos];
    setToDos(nToDos);
    console.log(`addToDoItem called with ${text} state: ${JSON.stringify(nToDos)}`);
  };

  const toggleCompleteToDoItem = (toDoItem: ToDoItem) => {
    const id = toDoItem.id;

    // Deep copy of items
    const nToDos = JSON.parse(JSON.stringify(toDos)) as ToDoItem[];

    nToDos.map((item) => {
      if(item.id === id){
        item.completed = !item.completed;
      }
    });
    setToDos(nToDos);
  };

  const deleteToDoItem = (toDoItem: ToDoItem) => {
    // Deep copy
    let nToDos = JSON.parse(JSON.stringify(toDos)) as ToDoItem[];
    nToDos = toDos.filter(item => item.id !== toDoItem.id);
    setToDos(nToDos);
  };

  // Change filter state
  const showAllItems = () => setSelectedFilter("ALL");
  const showActiveItems = () => setSelectedFilter("ACTIVE");
  const showCompleteItems = () => setSelectedFilter("COMPLETE");

  // Filtered items
  const filteredToDos = toDos.filter(item => {
    if (selectedFilter === "ACTIVE") return !item.completed;
    if (selectedFilter === "COMPLETE") return item.completed;
    return true;
  });


  // Save toDos to storage
  useEffect(() => {
    const saveToDos = async () => {
      // Return if data not loaded
      if(!isLoaded) return;

      try{
        await AsyncStorage.setItem("ToDos", JSON.stringify(toDos));
        console.log("Items saved!", JSON.stringify(toDos));
      }catch(err){
        console.log("Couldn't save todos", err);
      }
    };

    saveToDos();
  }, [toDos]);

  // Load toDos from storage
  useEffect(() => {
    const loadToDos = async () => {
      try{
        let nToDos: ToDoItem[] = [];
        const jsonToDos = await AsyncStorage.getItem("ToDos");

        if(jsonToDos !== null) nToDos = JSON.parse(jsonToDos) as ToDoItem[];
        
        setToDos(nToDos);
        console.log("ToDos fetched!", jsonToDos);
      }catch(err){
        console.log("Couldn't fetch data", err);
      }finally{
        setIsLoaded(true);
      }
    };

    loadToDos();
  }, []);

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
          <ToDoList 
            toDos={filteredToDos} 
            listHeaderText='Your to-do list' 
            emptyListText='Add things to do'
            toggleCompleteToDoItem={toggleCompleteToDoItem}
            deleteToDoItem={deleteToDoItem}/>
        </View>
      </View>

      <View style={styles.filters}>
        <FilterBar
          showAllItems={showAllItems}
          showActiveItems={showActiveItems}
          showCompleteItems={showCompleteItems}
          filter={selectedFilter}/>
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
  filters: {
    width: "100%",
  },
});

export default App;
