import React,{useContext}  from 'react';
import {ThemeContext} from './ThemeContext';
import './style.css';

const ToggleTheme = () => {
   const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
   const theme = isLightTheme? light : dark;
   const themeStyle = {
    backgroundColor : theme.ui, 
    color :theme.syntax,
    marginLeft: "600px"
   }
        return (
            <button style = {themeStyle} className = "button" onClick={toggleTheme}>Toggle the theme</button>   
        );
    }

export default ToggleTheme;