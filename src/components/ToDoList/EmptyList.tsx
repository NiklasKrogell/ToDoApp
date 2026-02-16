// EmptyList.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string
};

export const EmptyList: React.FC<Props> = ({title}) => {
    return(
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
