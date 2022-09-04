import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../constants/colors";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth < 380 ? 24 : 28,
    fontWeight: "bold",
    color: Colors.accent500,
    borderColor: Colors.primary600,
    borderWidth: 4,
    borderRadius: 12,
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
