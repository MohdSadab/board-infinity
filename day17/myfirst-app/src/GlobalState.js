import React,{createContext,useReducer,useState} from 'react'


export const TaskState=createContext({
  tasks:[],
  setTasks:(state)=>console.log(state)
}) 

const reducer=(prevState,action)=>{
  switch(action.type){

    case 'ADD_TASK':
        return [action.payload,...prevState]
    
    case 'TOGGLE_TASK':
      const {id}=action
      return prevState.map(task=>{
        if(task.title===id){
          return {...task,completed:!task.completed}
        }
        return task
    })

    default:
      return prevState
  }

}


const GlobalState = (props) => {
    const [tasks,dispatch]=useReducer(reducer,[])
    return( 
    <TaskState.Provider value={{tasks,dispatch}}>
        {props.children}
    </TaskState.Provider>
    )
}

export default GlobalState
/**
 *1->reducer pure function 
  2-> accept 2 arguments state, action (object , key type => )
  dispatch({type:'addTask',payload:{task:task}})

 *  
 */ 
