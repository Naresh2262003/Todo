import Todo from '../Todo/Todo'
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import TodoDispatchContext from '../../context/TodoDispatchContext';

function TodoList(){
    
    const {List}= useContext(TodoContext);
    const {dispatch}= useContext(TodoDispatchContext);

    const changeFinished= (isFinished, el) => {
        dispatch({type:'change_finished', payload:{isFinished,el}})
    }

    const onDelete= (el) => {
        dispatch({type:'delete_todo', payload:{el}})
    }

    const onEdit= (todoText, el) =>{
        dispatch({type:'edit_todo', payload:{todoText,el}})
    }

    return (
        <>  
            <div>
                {List.length>0 && 
                    List.map((el)=> 
                        <Todo 
                            key={el.id} 
                            id={el.id} 
                            todoData={el.todoData} 
                            isFinished={el.finished}
                            changeFinished={(isFinished)=>changeFinished(isFinished, el)}
                            onDelete={()=>onDelete(el)}
                            onEdit={(todoText)=>onEdit(todoText,el)}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TodoList;