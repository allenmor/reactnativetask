import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)


  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function deleteGoalHandler(itemId) {
    setCourseGoals(prev => prev.filter((el, i) =>{
      return el.id !== itemId
    }))

  }

  return (
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title="Add New Goal" color="#5e0acc"/>
     {modalIsVisible && <GoalInput setModalIsVisible={setModalIsVisible} modalIsVisible={modalIsVisible} setCourseGoals={setCourseGoals}/>}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem deleteGoalHandler={deleteGoalHandler}itemData={itemData}/>
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
