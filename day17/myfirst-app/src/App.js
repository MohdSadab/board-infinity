import { useEffect, useState } from 'react';
import './App.css';
// import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function App() {
  const [count,setCount] =useState({count:0,name:"MyCount"});
  // combination of 3 hooks 
  // 1-> componentDidMount, 2-> componentDidUpdate, 3-> componentWillUnMount
  useEffect(()=>{

      return function(){
        // console.log("Component will Unmount called")
      } 
  },[count])

  useEffect(()=>{
    console.log("only One time i get called")
  },[])
  return (
    <div className="App">
		{/* {open?"True":"false"}
		{open ?<SimpleClassBased name={temp}/> :null}

		<button onClick={()=>setOpen(!open)}>Toggle</button> */}

    <h1 className={count.count>5?'my-css':'no-css'}>Counter value is {count.count}</h1>
    <h1>Counter value is {JSON.stringify(count)}</h1>
    <button onClick={()=>setCount((prevCount)=>({...prevCount,count:prevCount.count+1}))}>Increment</button>
    <button onClick={()=>setCount((prevCount)=>({...prevCount,count:prevCount.count-1}))}>Decrement</button>

    </div>
  );
}

export default App;
