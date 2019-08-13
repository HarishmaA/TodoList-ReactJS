import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {shallow} from 'enzyme';
import NavBar from './NavBar.js';
import ToDoList from './ToDoList.js';

it('render without crashing',()=>{
    shallow(<App/>);
});

const enzymeWrapper = shallow(<App/>); 
describe('components',()=>{
   describe('App',()=>{       
       test('should render sub components NavBar',()=>{expect(enzymeWrapper.contains(<NavBar/>)).toEqual(true);
   });
       test('should render sub components ToDoList',()=>{expect(enzymeWrapper.contains(<ToDoList/>)).toEqual(true);
   })
})
})