import { useState } from "react";

function Todo({ id, todoData, isFinished, changeFinished, onDelete, onEdit }){
    const [finished, setFinished]= useState(isFinished);
    const [isEditing, SetEditing]= useState(false);
    const [editText, setEditText]= useState(todoData);
    // console.log(key, todoData);
    return (
        <div>
            <input 
                type="checkbox"
                id={id} 
                checked={finished} 
                onChange={(e)=>
                    {
                        setFinished(e.target.checked);
                        changeFinished(e.target.checked);
                    }
                }
            />

           {(isEditing)? <input type="text" value={editText} onChange={(e)=>{setEditText(e.target.value)}} />:<label htmlFor={id}>{todoData}</label>}

           <button onClick={()=>{
                SetEditing(!isEditing);
                onEdit(editText);
           }}>{(!isEditing)?'Edit':'Save'}</button>
           <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo;