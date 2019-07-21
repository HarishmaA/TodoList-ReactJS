import React from 'react';
import NavBar from './NavBar.js';
import ToDoList from './ToDoList.js';
import ThemeContextProvider from './ThemeContext';
import ToggleTheme from './ToggleTheme';

const App = () => {
    return (
      <ThemeContextProvider>
      <NavBar/>
      <ToggleTheme/>
      <ToDoList/>
      </ThemeContextProvider>
    );
  }
export default App;