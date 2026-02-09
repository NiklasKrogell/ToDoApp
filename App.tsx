/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {TextInput, Button } from 'react-native';

function App() {
  const testData = [
    {id: "1", text: "Item 1"},
    {id: "2", text: "Item 2"},
    {id: "3", text: "Item 3"},
  ];

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      {/* Content area */}
      <View style={styles.content}>
        <View style={styles.contentUpper}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputField} placeholder='Enter text' />
            <View style={styles.buttonContainer}>
              <Button title="Add" onPress={() => console.log("Add pressed")} />
            </View>
          </View>
        </View>

        <View style={styles.contentLower}>
          <View style={styles.listContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>My list</Text>
            </View>

            <View>

            </View>
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "grey",
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
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
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

  listContainer: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#f5f5f5"
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
  }
});

export default App;
