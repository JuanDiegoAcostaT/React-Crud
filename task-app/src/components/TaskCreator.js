import React, { useState } from 'react'

export const TaskCreator = (props) => {

    const [newTaskName, setNewTaskName] = useState('');

    const updatenewTaskValue = (e) => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('')
    }

    return (
        <div className="my-1">
            <input 
            type="text"
             name=""
             id=""
             className="form-control"
             value={newTaskName}
             onChange={updatenewTaskValue}
             />
             <button 
             className="btn btn-primary m-4"
            onClick={createNewTask}>
                 Add
             </button>
        </div>
    )

}