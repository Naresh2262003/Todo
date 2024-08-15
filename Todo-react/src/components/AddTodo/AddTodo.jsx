import { useState } from "react";

function AddTodo({updateList}){
    const [inputText, setInputText]= useState("");

    return (
        <>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} placeholder="Add your next todo" type="text" />
            <button 
                onClick={()=>{
                    updateList(inputText);
                    setInputText("");
                }}
            >Add</button>
        </>
    )
}

//***** MINE Version of Adding task to TODO

// function AddTodo({updateList, list}){
//     const [inputText, setInputText]= useState("");

//     return (
//         <>
//             <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} placeholder="Add your next todo" type="text" />
            
//             <button 
//                 onClick={()=>{
//                     updateList([...list,{id:list.length+1, todoData:inputText, finished:false}]);
//                     setInputText("");
//                 }}
//             >Add</button>
//         </>
//     )
// }

export default AddTodo;