import axios from 'axios';

export const ADD_TODO="ADD_TODO";
export const SET_LOADING="SET_LOADING";
export const FETCH_TODOS="FETCH_TODOS";
export const MARK_AS_DONE="MARK_AS_DONE";
export const FETCH_USERS="FETCH_USERS";


export const add_todo=(content)=>({
    type: ADD_TODO,
    payload: content
})

export const fetchTodos=(content)=>({
    type: FETCH_TODOS,
    payload: content
})

export const fetchUsers=(content)=>({
    type: FETCH_USERS,
    payload: content
})


export const setLoading=(content)=>({
    type: SET_LOADING,
    payload: content
})

export const markAsDone=(content)=>({
    type: MARK_AS_DONE,
    payload: content
})

export const fetchTodosAsync=()=>{
    return async (dispatch)=>{
        dispatch(setLoading(true))
        const response= await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch(setLoading(false))
        dispatch(fetchTodos(response.data))
    }
}

