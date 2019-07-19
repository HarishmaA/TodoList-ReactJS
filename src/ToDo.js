import React  from 'react';
import {deleteToDo, completedToDo} from './actions';

const ToDo = props => {
    const {todos,dispatch} = props;
   return (todos.map(todo=>
       <li style={{textDecoration: todo.checked? 'line-through' :'none' }} key={todo.id} onClick ={()=> dispatch(completedToDo(todo.id))} onDoubleClick={()=>dispatch(deleteToDo(todo.id))}>{todo.text}</li>)
   )
}
export default ToDo;
