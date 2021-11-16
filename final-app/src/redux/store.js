import {combineReducers, createStore} from 'redux';
import taskReducer from './reducers/taskReducer';



// const stateObj={
//     "task":[],
//     "completed_task":[],
// }

// combineReducers()
const store =createStore(taskReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;