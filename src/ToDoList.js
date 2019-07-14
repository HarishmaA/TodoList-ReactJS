import React, {useState} from 'react';
import uuid from 'uuid';
import './ToDoList.css';
import ToDo from './ToDo.js';
const ToDoList=()=>{
    const [item,setItem] = useState('');
    const [checked,setChecked] = useState(false);
    const [todos,setTodos] = useState([]);
    const handleChange=(e)=>{
        setItem(e.target.value);
    }
    const addToDo=()=>{
        const todo={id:uuid(),text:item};
        const finalTodos = [...todos,todo];
        setItem('');
        setTodos(finalTodos);
    }
    
    const strikeThrough=(id)=>{
        todos.map(todo=>{
        if(todo.id===id){
            setChecked(!checked);
        }
        })
    }
    const deleteToDo=(id)=>{
        const filteredTodos = todos.filter(todo=>todo.id!==id);
        setTodos(filteredTodos);
    }   
    return(
        <div className="list">
        <input id="input" type = "text" onChange = {handleChange} value={item}></input>
        <button onClick = {addToDo}>Add ToDo</button>
          <ul>
            <ToDo todos={todos} checked={checked} strikeThrough={strikeThrough} onDelete={deleteToDo}/>
          </ul> 
         </div> 

    );
}


export default ToDoList;