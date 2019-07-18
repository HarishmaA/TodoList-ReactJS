import uuid from 'uuid/v4';
import * as constants from './constant';

const reducer = (state=[],action)=>{
switch(action.type){
    
    case constants.ADD_TODO:
    const todo = {id:uuid(),text:action.item,checked:false};
    return [...state, todo];
    
    case constants.COMPLETED_TODO:
    return state.map(todo=>
        todo.id===action.id?{...todo,checked :!todo.checked} : todo
        )

    case constants.DELETE_TODO:
    return state.filter(todo=>todo.id!==action.id);

    default:
    return state;
}
}

export default reducer;