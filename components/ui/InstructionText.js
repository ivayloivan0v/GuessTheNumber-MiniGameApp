import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 26,
    color: Colors.accent500,
  },
});
