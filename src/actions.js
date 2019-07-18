import * as constants from './constant';
export const addToDo=(item)=>{
    return {
        type:constants.ADD_TODO,
        item
    }
 
}

export const completedToDo=(id)=>{
    return {
        type:constants.COMPLETED_TODO,
        id
    }
}
export const deleteToDo=(id)=>{
   return{
        type:constants.DELETE_TODO,
        id
    }
}   