import React, {useState,useReducer} from 'react';
import './ToDoList.css';
import ToDo from './ToDo.js';
import {addToDo} from './actions';
import reducer from './reducer';

const ToDoList = props => {
   const [item,setItem] = useState('');
   const [todos, dispatch] = useReducer(reducer, []);
 
    const handleChange=(e)=>{
        setItem(e.target.value);
     }
     const handleClick=()=>{
     dispatch(addToDo(item));
     setItem('');
    }
    return(
        <div className="list">
        <input id="input" type = "text" onChange = {handleChange} value={item}></input>
        <button onClick ={handleClick}>Add ToDo</button>
          <ul>
            <ToDo todos={todos} dispatch = {dispatch}/>
          </ul> 
         </div> 
      )
}
export default ToDoList;