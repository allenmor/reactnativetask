import { StyleSheet, Text, View, TextInput, Button, Modal, Image } from "react-native";
import React from "react";
import { useState } from "react";


const GoalInput = ({ setCourseGoals, modalIsVisible, setModalIsVisible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(e) {
    setEnteredGoalText(e);
  }
  function addGoalHandler() {
    let randomNumber = Math.random();

    let randomNumberString = String(randomNumber);
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: randomNumberString },
    ]);

    setEnteredGoalText("");
    setModalIsVisible(false)
  }
  function handleCancelPress() {
    setModalIsVisible(false);
  }
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={handleCancelPress} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: 'black'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
  ,
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
