import uuid from 'uuid/v4';
import * as constants from './constant';
import reducer from './reducer';
describe('todos reducer',()=>{
    test('reducer return initial state',()=>{
    expect(reducer([],{})).toEqual([]);
})
test('should handle ADD_TODO',()=>{
expect(reducer([],{type:constants.ADD_TODO,
     item : 'write unit test cases'})).toEqual([{
        id:0,text:'write unit test cases',checked:false
   }])})
test('should handle ADD_TODO',()=>{
expect(reducer([{id:0,text:'write unit test cases',checked:false}],{type:constants.ADD_TODO,
         item : 'write unit test cases'})).toEqual([{
            id:0,text:'write unit test cases',checked:false
       },{
        id:0,text:'write unit test cases',checked:false
   }])})
})