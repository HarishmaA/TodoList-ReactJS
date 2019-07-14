import React, { Component } from 'react';
import NavBar from './NavBar.js';
import ToDoList from './ToDoList.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
      <NavBar/>
      <ToDoList/>
      </>
    );
  }
}

export default App;
