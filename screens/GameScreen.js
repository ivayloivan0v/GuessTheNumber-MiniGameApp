import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};
let minBaundary = 1;
let maxBaundary = 100;

export const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(
    minBaundary,
    maxBaundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont cheat!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBaundary = currentGuess;
    } else {
      minBaundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBaundary,
      maxBaundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 38,
  },
});
