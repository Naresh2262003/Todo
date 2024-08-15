import { useState,useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo(){
    const [inputText, setInputText]= useState("");
    const {dispatch}= useContext(TodoDispatchContext)

    return (
        <>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} placeholder="Add your next todo" type="text" />
            <button 
                onClick={()=>{
                    dispatch({type:'add_todo', payload:{todoText:inputText}});
                    setInputText("");
                }}
            >Add</button>
        </>
    )
}

export default AddTodo;