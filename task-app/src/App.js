import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'
import Home from './home'

function App() {
  const [taskItems, setTaskItems] = useState([
    { name : 'Do the landry', done : false },
    { name : 'Babysis stepsister', done : false },
    { name : 'Do the homeworks', done : true },
    { name : 'Wash the dishes', done : false }
  ])

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
     let data = localStorage.getItem('tasks');
     if(data != null ) {
       setTaskItems(JSON.parse(data))
     } else{
       setTaskItems([
        { name : 'Do the landry', done : false },
        { name : 'Babysis stepsister', done : false },
        { name : 'Do the homeworks', done : true },
        { name : 'Wash the dishes', done : false }
       ])
       setShowCompleted(true);
     }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])


  const createNewTask = (taskName) => {
    if(!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName , done: false}])
    }
  }

  const toggleTask = (task) => {
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done : !t.done} : t)))
  }

  const taskTableRows = (doneValue) => {
    return taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
    )
  )
  }

  return (
    <>
        <div>
      <Home taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
      <table className="table table-striped table-border">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(false)}
          </tbody>
      </table>
    </div>
    <div className="bg-secondary-text-white text-center p-2">
      <VisibilityControl 
      description="Completed task"
      isChecked={showCompleted}
      callback={checked => setShowCompleted(checked)}
    />
    </div> 

      { showCompleted && (
        <table className="table table-striped ble-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
        <tbody>
          {taskTableRows(true)}
        </tbody>
        </table>
      ) }

    </>
  );
}

export default App;
