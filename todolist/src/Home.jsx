import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  },[])

  const handleEdit=(id)=>{
    axios.put('http://localhost:3001/update/'+id)
    .then(result =>{
      location.reload()
    } )
    .catch(err => console.log(err))
  }

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result =>{
      location.reload()
    } )
    .catch(err => console.log(err))
  }
  return (
   <div className='home'>
        <h2>Todo List</h2>
        <Create></Create>
        {
          todos.length === 0 ? <div><h2>No Recors present</h2></div>
          :
          todos.map((todo)=>(
            <>
            <div className="task">
              <div className="checkbox" onClick={()=> handleEdit(todo._id)} >
              {todo.done ?  <input type="checkbox" checked/> :  <input type="checkbox"/>} 
              
                <p>{todo.task}</p>
              </div>
              <div>
                <button type="button" onClick={()=>handleDelete(todo._id)}>Delete</button>
              </div>
            </div>
            </>
          ))
        }
   </div>
  )
}

export default Home
