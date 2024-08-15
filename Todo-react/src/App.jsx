import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import './App.css'
import TodoContext from './context/TodoContext.js'
import { useState } from 'react'

function App() {

    
  const [List,setList]= useState([
    {id:1, todoData:"task1", finished:true},
    {id:2, todoData:"task2", finished:false},
  ]);

  return (
    <TodoContext.Provider value={{List,setList}}>

      <AddTodo 
        updateList={(todo)=>{
          setList([...List,{id:List.length+1, todoData:todo, finished:false}]);
        }} 
      />
      
      <TodoList />

    </TodoContext.Provider>
  )
}

export default App
