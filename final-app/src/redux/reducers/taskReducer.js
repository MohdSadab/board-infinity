import { ADD_TODO, FETCH_TODOS, MARK_AS_DONE, SET_LOADING } from "../actions/action"


const initialState={
    isLoading:false,
    todos:[],
    doneTodos:[]
}

const taskReducer=(state=initialState,action) =>{

    switch(action.type){
        
        case ADD_TODO:
            return {...state,todos:[action.payload,...state.todos]}

        case SET_LOADING:
            return {...state,isLoading:action.payload}

        case FETCH_TODOS:
            return {...state,todos:action.payload}

        case MARK_AS_DONE:
            const doneTodos=state.todos.filter(({id})=>action.payload===id)
            return {...state,doneTodos:[...doneTodos,...state.doneTodos]}

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