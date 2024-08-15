function todoReducer(state, action){
    if(action.type=='add_todo'){

        let todoText= action.payload.todoText;
        return [...state,{id:state.length+1, todoData:todoText, finished:false}];

    }else if(action.type=='delete_todo'){

        let el= action.payload.el;
        const updatedList= state.filter(t => el.id!=t.id)
        return updatedList;

    }else if(action.type=='edit_todo'){

        let todoText= action.payload.todoText;
        let el= action.payload.el;

        const updatedList= state.map(t=>{
            if(t.id==el.id){
                el.todoData=todoText;
            }
            return t;
        })

        return updatedList;
        
    }else if(action.type=='change_finished'){

        let isFinished= action.payload.isFinished;
        let el= action.payload.el;

        const updatedList= state.map(t=>{
            if(t.id==el.id){
                el.finished= isFinished;
            }
            return t;
        });
        return updatedList;

    }else{

        return state;

    }
}

export default todoReducer;