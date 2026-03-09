// ToDoListItem.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ToDoItem } from '../../../ToDoItem';
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface Props {
    toDoItem: ToDoItem,
    toggleCompleteToDoItem: (item: ToDoItem) => void,
    deleteToDoItem: (item: ToDoItem) => void,
};

export const ToDoListItem: React.FC<Props> = ({toDoItem, toggleCompleteToDoItem, deleteToDoItem}) => {
    let completeColor: string;
    let completeIcon: string;

    if(toDoItem.completed){
        completeColor = 'lightgreen';
        completeIcon = 'done';
    }else{
        completeColor = 'orange';
        completeIcon = 'notifications-active';
    }

    return(
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{toDoItem.title}</Text>
            <View style={styles.iconsContainer}>
                <MaterialIcons name={completeIcon} 
                    size={30} 
                    color={completeColor}
                    onPress={() => toggleCompleteToDoItem(toDoItem)}/>
                <MaterialIcons 
                    name="delete" 
                    size={30} 
                    color='red'
                    onPress={() => deleteToDoItem(toDoItem)}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: "#007bff"
  },
  listItemText: {
    fontSize: 16,
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

