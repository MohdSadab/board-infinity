import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import TaskRoot from './TaskRoot';
import TaskDone from './TaskDone';
import CreateTask from './components/CreateTask';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo } from './redux/actions/action';

function App() {

  const state=useSelector(state=>state);
  console.log(state);
  const dispatch=useDispatch();

  const addTaskHandler=(data)=>{
    dispatch(add_todo(data))
  }
  return (
    <div className="Apps">
    <nav className="nav">
        <div className="nav-items">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-items"> 
          <Link to="/class/i-am-dynamic-id">Class Component</Link>
        </div>
        <div className="nav-items"> 
          <Link to="/done">Done Task</Link>
        </div>
        <div className="nav-items"> item 3</div>
    </nav>
    <CreateTask addTaskHandler={addTaskHandler}/>
    <Switch>
      <Route exact path="/" component={TaskRoot}/>
      <Route exact path="/done" component={TaskDone}/>
      {/* <Route exact path="/class/:id" component={SimpleClassBased}/> */}
    </Switch>
</div>
  );
}

export default App;
