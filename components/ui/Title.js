import React from "react";
import { Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    borderColor: Colors.primary600,
    borderWidth: 4,
    borderRadius: 12,
    textAlign: "center",
    padding: 12,
  },
});
