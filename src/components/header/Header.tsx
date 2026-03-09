// Header.tsx

import MaterialIcons from '@react-native-vector-icons/material-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string;
};

export const Header: React.FC<Props> = ({title}) => {
    return(
        <View style={styles.header}>
          <MaterialIcons name='home' size={30} color='white'/>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.placeholder}/>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#3498db",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  placeholder: {
    width: 24,
  },
});