import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import { Colors } from "../constants/colors";

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerButtonContainer: {
    margin: 6,
    borderRadius: 28,
    overflow: "hidden",
  },
  innerButtonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
