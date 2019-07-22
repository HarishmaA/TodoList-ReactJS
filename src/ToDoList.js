import React, {useState,useContext} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './style.css';
import ToDo from './ToDo.js';
import {addToDo} from './actions';
import { ThemeContext } from './ThemeContext';

const ToDoList = () => {
   const [item,setItem] = useState('');
   const todos = useSelector(state=>state.todos);
   const dispatch =  useDispatch();
   const {isLightTheme, light, dark} = useContext(ThemeContext);
   const theme = isLightTheme? light : dark;
 
    const handleChange=(e)=>{
        setItem(e.target.value);
     }
     const handleClick=()=>{
     dispatch(addToDo(item));
     setItem('');
    }
    const themeStyle = {
      backgroundColor : theme.ui, 
      color :theme.syntax 
    }
    return(
        <div className="list">
        <input className = "inputbox" style = {themeStyle} id="input" type = "text" onChange = {handleChange} value={item}></input>
        <button className = "button" style = {themeStyle} onClick ={handleClick}>Add ToDo</button>
          <ul style={{listStyle: "none"}}>
            <ToDo todos={todos} dispatch = {dispatch}/>
          </ul> 
         </div> 
      )
}
export default ToDoList;