// FilterBar.tsx

import { StyleSheet, Button, View } from "react-native";

interface Props{
    showAllItems: () => void,
    showActiveItems: () => void,
    showCompleteItems: () => void,
    filter: String,
};

export const FilterBar: React.FC<Props> = (props) => {
    return(
        // Buttons to filter items
        <View style={styles.filters}>
            <View style={[styles.buttonContainer, props.filter === "ALL" && styles.selectedButton]}>
                <Button
                    title="ALL"
                    onPress={() => {
                        props.showAllItems();
                    }
                }/>
            </View>
            <View style={[styles.buttonContainer, props.filter === "ACTIVE" && styles.selectedButton]}>
                <Button
                    title="ACTIVE"
                    onPress={() => {
                        props.showActiveItems();
                    }
                }/>
            </View>
            <View style={[styles.buttonContainer, props.filter === "COMPLETE" && styles.selectedButton]}>
                <Button
                    title="COMPLETE"
                    onPress={() => {
                        props.showCompleteItems();
                    }
                }/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    filters: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5,
    },
    buttonContainer:{
        flex: 1,
        padding: 1,
    },
    selectedButton: {
        flex: 1,
        padding: 2,
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
    },
});