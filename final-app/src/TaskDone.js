import { useContext } from 'react';
import './App.css';
import TaskComponent from './components/TaskComponent';
// import { TaskState } from './GlobalState';
// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function TaskDone() {
  // const {tasks,dispatch}=useContext(TaskState)
  // console.log(tasks.filter(task=>task.completed))
  // const completeIncompleteTaskHandler=(id)=>{
  //   dispatch({type:'TOGGLE_TASK',id})
  // }
  return (
    <div className="Apps">
        {/* {tasks.filter(task=>task.completed).map(task=>(<TaskComponent title={task.title} 
                                         key={task.title} 
                                         id={task.title}
                                         isCompleted={task.completed} 
                                         onChangeHandler={completeIncompleteTaskHandler}/>))} */}
        Done
    </div>
  );
}

export default TaskDone;


// task in todo
// 1-> create task (done)
// 2-> task listing (done)
// 3-> mark task as a completed/incompleted task {task:title,completed:true/false}
// 4-> routing of completed tasks
// 5-> routing of incompleted task
