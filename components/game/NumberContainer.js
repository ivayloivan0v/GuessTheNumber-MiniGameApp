import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary600,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary600,
    fontSize: 36,
    fontWeight: "bold",
  },
});