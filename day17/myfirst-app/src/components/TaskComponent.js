import React from 'react'

const TaskComponent = (props) => {
    return (
        <div className="task">
           <div >{props.title} </div>
           <input type="checkbox" checked={props.isCompleted} onChange={()=>props.onChangeHandler(props.id)}/>
        </div>
    )
}

export default TaskComponent
