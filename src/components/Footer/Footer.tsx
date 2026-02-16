// Footer.tsx

import { StyleSheet, Text, View } from "react-native";

interface Props{
    cr: string;
    year: number;
};

export const Footer: React.FC<Props> = ({cr, year}) => {
    return(
        <View style={styles.footer}>
            <Text style={styles.text}>&#xA9;{cr}, {year}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});