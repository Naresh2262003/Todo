import Todo from '../Todo/Todo'
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

function TodoList(){

    const {List, setList}= useContext(TodoContext);

    const changeFinished= (isFinished, el) => {
        const updatedList= List.map(t=>{
            if(t.id==el.id){
                el.finished= isFinished;
            }
            return t;
        });
        setList(updatedList);
    }

    const onDelete= (el) => {
        const updatedList= List.filter(t => el.id!=t.id)
        setList(updatedList);
    }

    const onEdit=(todoText,el)=>{
        const updatedList= List.map(t=>{
            if(t.id==el.id){
                el.todoData=todoText;
            }
            return t;
        })
        setList(updatedList);
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