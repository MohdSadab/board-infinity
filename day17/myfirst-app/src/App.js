import { useState } from 'react';
import './App.css';
import SimpleClassBased from './components/SimpleClassBased';
// 2 things by which components re render
// 1-> if state of the component get change
// 2-> if props of the component get change

function App() {
  const temp=["test1","test2"]
  const [open,setOpen]=useState(true)
  return (
    <div className="App">
		{open?"True":"false"}
		{open ?<SimpleClassBased name={temp}/> :null}

		<button onClick={()=>setOpen(!open)}>Toggle</button>

    </div>
  );
}

export default App;
