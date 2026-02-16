// Header.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string;
};

export const Header: React.FC<Props> = ({title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});