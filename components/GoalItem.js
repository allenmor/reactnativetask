import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ itemData, deleteGoalHandler }) => {
  function deletePressHandle() {
    deleteGoalHandler(itemData.item.id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable style={({pressed}) => pressed && styles.pressedItem} android_ripple={{color: 'black'}} onPress={deletePressHandle}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    margin: 8,
    fontSize: 20,
    borderRadius: 5,
    color: "white",
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
    padding: 5,
  },
  pressedItem: {
      opacity: 0.5
  }
});
