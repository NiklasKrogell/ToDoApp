// ToDoInput.tsx

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    addToDoItem: (text: string) => void;
};

export const ToDoInput: React.FC<Props> = ({addToDoItem}) => {
    const [inputValue, setInputValue] = useState<string>('')

    return(
        <View style={styles.textInputContainer}>
            <TextInput 
            style={styles.inputField} 
            placeholder='A thing to do'
            value={inputValue} 
            onChangeText={(text) => setInputValue(text)}/>

            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={() => {
                    addToDoItem(inputValue);
                    setInputValue('');
                }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: "80%",
    alignSelf: "center",
  },
  inputField: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
  },
});