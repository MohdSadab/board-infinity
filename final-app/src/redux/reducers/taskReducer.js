import { ADD_TODO } from "../actions/action"


const taskReducer=(state=[],action) =>{

    switch(action.type){
        
        case ADD_TODO:
            return [action.payload,...state]

        default:
            return state
    }   
    
}


export  default taskReducer


// what redux needed as initial setup 
// 1-> store (Global state of the react component)
// 2-> need a communicator with globalstate (reducer) what reducer do it update store according to dispatched action 
// 3-> action type object {type:"action_type",payload:"payload or object"}
// 4-> import store and pass it through the provider as a props

// redux is onnected with react component