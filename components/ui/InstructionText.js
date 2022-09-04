import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: deviceWidth < 380 ? 22 : 24,
    color: Colors.accent500,
  },
});
