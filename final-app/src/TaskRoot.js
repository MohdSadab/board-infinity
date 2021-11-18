import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TaskComponent from './components/TaskComponent';
import { fetchTodosAsync, markAsDone } from './redux/actions/action';
// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function TaskRoot() {
  const dispatch = useDispatch();
  const  {taskReducer}= useSelector(state => state);
  const { todos, isLoading } =taskReducer;

  useEffect(() => {
    dispatch(fetchTodosAsync())
  }, [])

  const onChangeHandler =(id)=>{
    dispatch(markAsDone(id));
  }

  if (isLoading) {
    return (<div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color:'black'
    }}>
      <h4>Loading...</h4>
    </div>
    )
  }
  return (
    <div className="Apps" style={{textAlign:'center'}}>
      {todos.map(({ id, title }) => (
        <TaskComponent title={title}
          key={id}
          checked={false}
          onChangeHandler={()=>onChangeHandler(id)}
        />
      ))}
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
