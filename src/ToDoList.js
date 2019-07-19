import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './ToDoList.css';
import ToDo from './ToDo.js';
import {addToDo} from './actions';

const ToDoList = () => {
   const [item,setItem] = useState('');
   const todos = useSelector(state=>state);
   const dispatch =  useDispatch();
 
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