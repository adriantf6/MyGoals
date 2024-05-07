import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
import { useState } from 'react';

export default function App() {
  const [goals,setGoals] = useState([])

  function handleAddGoal(enteredGoalText){
    setGoals(() =>[...goals,{text:enteredGoalText, key: Math.random().toString()}])
    console.log(goals)

  }
function handleDeleteGoal(){
  console.log("DELETE")
}

  return (
    <View style={styles.container}>
      
      <GoalInput onAddGoal={handleAddGoal}
      />
      <View style = {styles.goalsContainer}>
      <FlatList 
      data={goals}
      renderItem={(itemData) =>{
        return(<GoalItem
          itemData={itemData}
          onDeleteItem={handleDeleteGoal}
          />
          )
      }}
      keyExtrator={(item)=>{
        return item.id
      }}
      />
      </View>
      
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingtop:50,
    paddingingHorizontal:20,
  },
  goalsContainer:{
    flex:5,
  },

});
