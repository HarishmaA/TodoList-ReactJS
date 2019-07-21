import React,{useContext}  from 'react';
import {deleteToDo, completedToDo} from './actions';
import { ThemeContext } from './ThemeContext';

const ToDo = props => {
    const {isLightTheme ,light ,dark} = useContext(ThemeContext);
    const theme = isLightTheme? light : dark;
    const {todos,dispatch} = props;
    const style = {
                    backgroundColor :theme.bg , 
                    color:theme.syntax,
                    fontSize : "30px",
                    height:"40px",
                    marginBottom:"4px",
                    width:"1100px"
                }
   return (todos.map(todo=>
       <li style={{...style,textDecoration : todo.checked? 'line-through' :'none'}} key={todo.id} onClick ={()=> dispatch(completedToDo(todo.id))} onDoubleClick={()=>dispatch(deleteToDo(todo.id))}>{todo.text}</li>)
   )
}
export default ToDo;
