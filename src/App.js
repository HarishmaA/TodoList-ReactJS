import React, {Component} from 'react';
import OneComponent from './OneComponent';
import TwoComponent from './TwoComponent';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1:false,
            show2:false
          };
    }
    handleClick=(e)=>{
        e.target.innerText==="1"? 
        this.setState({...this.state,show1:true, show2:false}):this.setState({...this.state,show1:false, show2:true})
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.handleClick}>1</li>
                    <li onClick={this.handleClick}>2</li>
                    {this.state.show1 && <OneComponent/> || (this.state.show2 && <TwoComponent/>)}
                </ul>
            </div>
            
        );
    }
}

export default App;