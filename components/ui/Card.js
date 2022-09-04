import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: deviceWidth < 380 ? 18 : 24,
    padding: deviceWidth < 380 ? 12 : 16,
    backgroundColor: Colors.primary800,
    borderRadius: 12,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});
