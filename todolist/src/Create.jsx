import axios from 'axios';
import React, { useState } from 'react'

const Create = () => {
const [task, setTask] = useState();

const handleAdd=()=>{
    axios.post('http://localhost:3001/add',{task: task})
    .then(result => {
        location.reload()
    })
    .catch(err => console.log(err))
}    
  return (
    <div className='create-form'>
      <input type="text" name="" id="" placeholder='Enter Task ' onChange={(e)=>setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
