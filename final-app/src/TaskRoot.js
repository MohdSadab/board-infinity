import { useContext } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskComponent from './components/TaskComponent';
// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function TaskRoot() {
  
  return (
    <div className="Apps">
       done
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
