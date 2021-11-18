import {combineReducers, createStore, applyMiddleware} from 'redux';
import taskReducer from './reducers/taskReducer';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/userReducer';

// const stateObj={
//     "task":[],
//     "completed_task":[],
// }

// combineReducers()
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store =createStore(
    combineReducers({
    taskReducer: taskReducer,
    usersReducer:usersReducer
}),composedEnhancer);

export default store;