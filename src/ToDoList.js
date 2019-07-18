import React, {Component} from 'react';
import './ToDoList.css';
import ToDo from './ToDo.js';
import {addToDo,deleteToDo, completedToDo} from './actions';
import {connect} from 'react-redux';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {item :'' };
  }
     handleChange=(e)=>{
        this.setState({item : e.target.value});
     }
     handleClick=()=>{
     this.props.addToDo(this.state.item);
     this.setState({item : ''});
    }
    render(){
      const {todos,completedToDo,deleteToDo} = this.props;
      return(
        <div className="list">
        <input id="input" type = "text" onChange = {this.handleChange} value={this.state.item}></input>
        <button onClick ={this.handleClick}>Add ToDo</button>
          <ul>
            <ToDo todos={todos}  onComplete={completedToDo} onDelete={deleteToDo}/>
          </ul> 
         </div> 
      )
}
}

const  mapStateToProps = state => {
  return {
    todos : state
  }
}
const mapDispatchToProps = {
   addToDo,
   deleteToDo,
   completedToDo
  }
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
