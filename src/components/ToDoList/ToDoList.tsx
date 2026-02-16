// ToDoList.tsx

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ToDoItem } from '../../../ToDoItem';
import { EmptyList } from './EmptyList';

interface Props {
    toDos: ToDoItem[],
    listHeaderText: string,
    emptyListText: string,
};

export const ToDoList: React.FC<Props> = (props) => {
    return(
        <View style={styles.listContainer}>
            <View style={styles.listHeader}>
                <Text style={styles.listHeaderText}>{props.listHeaderText}</Text>
            </View>
        
            <FlatList
                data={props.toDos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.title}</Text>
                </View>
                )}
                ListEmptyComponent = {<EmptyList title={props.emptyListText}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#ccc"
  },
  listHeader: {
    height: 60,
    width: "100%",
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  listItem: {
    padding: 15,
    backgroundColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: "#007bff"
  },
  listItemText: {
    fontSize: 16,
  },
});

