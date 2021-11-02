import { useContext } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskComponent from './components/TaskComponent';
import { TaskState } from './GlobalState';
// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function TaskRoot() {
  const {tasks,dispatch}=useContext(TaskState)
  const completeIncompleteTaskHandler=(id)=>{
     dispatch({type:'TOGGLE_TASK',id})
  }
  return (
    <div className="Apps">
        <CreateTask addTaskHandler={(inputTask)=>dispatch({type:'ADD_TASK',payload:inputTask})}/>
        {tasks.map(task=>(<TaskComponent title={task.title} 
                                         key={task.title} 
                                         id={task.title}
                                         isCompleted={task.completed} 
                                         onChangeHandler={completeIncompleteTaskHandler}/>))}
    </div>
  );
}

export default TaskRoot;


// task in todo
// 1-> create task (done)
// 2-> task listing (done)
// 3-> mark task as a completed/incompleted task {task:title,completed:true/false}
// 4-> routing of completed tasks
// 5-> routing of incompleted task
