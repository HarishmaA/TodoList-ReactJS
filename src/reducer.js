import uuid from 'uuid/v4';
import * as constants from './constant';
const initialState = {
    todos:[]
}
const reducer = (state = initialState, action)=>{
switch(action.type){
    
    case constants.ADD_TODO:
    const todo = {id:uuid(),text:action.item,checked:false};
    return ({...state,todos:[...state.todos, todo]});
    
    case constants.COMPLETED_TODO:
    return {...state, todos: state.todos.map(todo=>
        todo.id===action.id?{...todo,checked :!todo.checked} : todo)}

    case constants.DELETE_TODO:
    return {...state, todos: state.todos.filter(todo=>todo.id!==action.id)};

    default:
    return state;
}
}

export default reducer;