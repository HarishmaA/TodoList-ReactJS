import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import {shallow} from 'enzyme';

function setup() {
    const props = {
      onComplete:jest.fn(),
      onDelete:jest.fn(),
      todos   
    }
  
    const enzymeWrapper = shallow(<ToDo  {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }

  describe('components', () => {
    describe('ToDoList', () => {
      it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
  
        expect(enzymeWrapper.find('li').hasClass('list')).toBe(true)
  
        expect(enzymeWrapper.find('button').text()).toBe('Add ToDo')
      }) 
    })
})