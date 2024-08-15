import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import './App.css'
import TodoContext from './context/TodoContext.js'
import { useState , useReducer} from 'react'
import todoReducer from './reducers/todoReducer.js'
import TodoDispatchContext from './context/TodoDispatchContext.js'

function App() {

  const [List, dispatch]= useReducer(todoReducer,[]);

  return (
    <TodoContext.Provider value={{List}}>
      <TodoDispatchContext.Provider value={{dispatch}}>

        <AddTodo />
        
        <TodoList />

      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
