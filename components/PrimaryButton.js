import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export const PrimaryButton = ({ children }) => {
  const onPressHandler = () => {
    console.log("Pressed");
  };
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
        android_ripple={{ color: "#70043a" }}
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
    backgroundColor: "#820543",
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
