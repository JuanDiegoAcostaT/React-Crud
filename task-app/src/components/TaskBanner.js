import React from 'react';

export const TaskBanner = (props) => (
    <h1 className="bg-primary text-white text-center p-4" >
       {props.userName}`s - React Crud App ({props.taskItems.filter(t => !t.done).length} tasks To do)
    </h1>

)