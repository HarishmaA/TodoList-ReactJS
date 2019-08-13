import * as constants from './constant';
import {addToDo} from './actions';
describe('actions',()=>{
    test('should create a action to add an todo',()=>{
        let item = 'write unit test case';
        let expectedTodo = {
            type:constants.ADD_TODO,
            item
        }
        expect(addToDo(item)).toEqual(expectedTodo);
    }
    )
})