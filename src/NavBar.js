import React ,{useContext} from 'react';
import {ThemeContext} from './ThemeContext';

const NavBar = () =>{
const { isLightTheme, light, dark } = useContext(ThemeContext);
const theme = isLightTheme ? light : dark;
return (
    <div className = "navbar" style={{ color: theme.syntax, background: theme.bg }}>
        <h3 style={{background: theme.ui, float:"left", width:"50%",textAlign:"left",fontSize:"30px"}}>:)</h3>      
        <h3 style={{background: theme.ui, float:"right", width:"50%",textAlign:"right",fontSize:"30px"}}>Home&emsp;About&emsp;Contact&emsp;Feedback</h3>
    </div>
)
}
export default NavBar;

