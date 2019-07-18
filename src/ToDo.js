import React from 'react';
const ToDo = props => {
    const {todos,onDelete,onComplete} = props;
   return (todos.map(todo=>
       <li style={{textDecoration: todo.checked? 'line-through' :'none' }} key={todo.id} onClick ={()=> onComplete(todo.id)} onDoubleClick={()=>onDelete(todo.id)}>{todo.text}</li>)
   )
}
export default ToDo;
