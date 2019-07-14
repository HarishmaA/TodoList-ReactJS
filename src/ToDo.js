import React from 'react';
const ToDo = ({todos,checked,onDelete,strikeThrough}) => {
   return( todos.map(todo=>
        <li style={{textDecoration: checked? 'line-through' :'none' }} key={todo.id} onClick ={()=> strikeThrough(todo.id)} onDoubleClick={()=>onDelete(todo.id)}>{todo.text}</li>)
   )
}
export default ToDo;
