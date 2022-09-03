import React from "react";
import { Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.accent500,
    borderColor: Colors.accent500,
    borderWidth: 2,
    textAlign: "center",
    padding: 12,
  },
});
