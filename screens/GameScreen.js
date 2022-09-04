import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

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

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBaundary = 1;
    maxBaundary = 100;
  }, []);

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
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="#ddb52f" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="#ddb52f" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 38,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});
