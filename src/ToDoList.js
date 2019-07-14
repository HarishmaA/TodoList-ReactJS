import React, {Component} from 'react';
import uuid from 'uuid';
import './ToDoList.css';
import ToDo from './ToDo.js';
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { item:'', checked:false,todos:[] };
    }
    handleChange=(e)=>{
    this.setState({item: e.target.value});
    }
    addToDo=()=>{
    const todo={id:uuid(),text:this.state.item};
    const todos = [...this.state.todos,todo];
    this.setState({item:'',todos:todos})
    }
    strikeThrough=(id)=>{
     this.state.todos.map(todo=>{
          if(todo.id===id){
              this.setState({checked:!this.state.checked})
          }
        })

    }
    deleteToDo=(id)=>{
        const todos = this.state.todos.filter(todo=>todo.id!==id);
        this.setState({todos:todos});
    }
    render() {
        const {todos,checked}=this.state;
        return (
        <div className="list">
        <input id="input" type = "text" onChange = {this.handleChange} value={this.state.item}></input>
        <button onClick = {this.addToDo}>Add ToDo</button>
          <ul>
            <ToDo todos={todos} checked={checked} strikeThrough={this.strikeThrough} onDelete={this.deleteToDo}/>
          </ul> 
         </div> 
        );
    }
}

export default ToDoList;