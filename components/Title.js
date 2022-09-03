import React from "react";
import { Text, StyleSheet } from "react-native";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    borderColor: "#ddb52f",
    borderWidth: 2,
    textAlign: "center",
    padding: 12,
  },
});
