import React,{useState} from 'react'

const CreateTask = (props) => {
    const [inputTask,setInputTask]=useState('')

    const addHandler=()=>{
        props.addTaskHandler({title:inputTask,completed:false});
        setInputTask('')
    }
    return (
        <div className="task-header">
            <input type="text" placeholder="create task" className="task-input" value={inputTask} onChange={e=>setInputTask(e.target.value)}/>
            <button className="task-add" onClick={addHandler}>Add</button>
        </div>
    )
}

export default CreateTask
