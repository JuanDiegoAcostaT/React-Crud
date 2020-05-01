import React, { useState } from 'react';

function Home (props) {

  const [userName, setUserName] = useState('');


  const updateUserName = (e) => setUserName(e.target.value);


    return(
        <>
            <div className="">
                <h3>Add a name for your task App</h3>
                <input 
                type="text"
                name=""
                id="" 
                onChange={updateUserName}
                />
            </div>
            <div className="">
             <h1 className="bg-primary text-white text-center p-4" >
                  {userName}`s - React Crud App ({props.taskItems.filter(t => !t.done).length} tasks To do)
             </h1>
            </div>
        </>
    )
}

export default Home;
