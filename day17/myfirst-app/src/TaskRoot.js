import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskComponent from './components/TaskComponent';
// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function TaskRoot() {
  const [tasks,setTasks]=useState([]);
  const completeIncompleteTaskHandler=(id)=>{
      const temp=tasks.map(task=>{
          if(task.title===id){
            return {...task,completed:!task.completed}
          }
          return task
      })
      setTasks(temp)
  }
  return (
    <div className="Apps">
        <CreateTask addTaskHandler={(inputTask)=>setTasks(prevState=>[inputTask,...prevState])}/>
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
