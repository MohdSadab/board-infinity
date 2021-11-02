
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import TaskRoot from './TaskRoot';
import SimpleClassBased from './components/SimpleClassBased';
import TaskDone from './TaskDone';

// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function App() {
  
 
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
        <Switch>
          <Route exact path="/" component={TaskRoot}/>
          <Route exact path="/done" component={TaskDone}/>
          <Route exact path="/class/:id" component={SimpleClassBased}/>
        </Switch>
    </div>
  );
}

export default App;


// task in todo
// 1-> create task (done)
// 2-> task listing (done)
// 3-> mark task as a completed/incompleted task {task:title,completed:true/false}
// 4-> routing of completed tasks
// 5-> routing of incompleted task
