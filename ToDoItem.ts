import uuid from 'react-native-uuid';

export type ToDoItem = {
    id: string,
    title: string,
    completed: boolean,
};

export const testToDos: ToDoItem[] = [
    {
        id: uuid.v4(),
        title: "Do the dishes",
        completed: false,
    },
    {
        id: uuid.v4(),
        title: "Empty garbage bin",
        completed: false,
    }
]