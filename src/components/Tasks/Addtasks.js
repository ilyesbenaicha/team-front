import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'reactstrap'
import {useDispatch} from "react-redux"
import { todoAdd } from '../../slices/taskSlice'
function Addtasks() {
   const dispatch = useDispatch()
    const[todo,setTodo]= useState({
        task:"",
        isComplete: false
      });
      console.log("todo=",todo);
      const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(todoAdd(todo))
        setTodo({
          task:"",
          isComplete:false,
        })
      }
  return (
    <>
    <Form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter a task" value={todo.task} onChange={(e)=>setTodo({...todo,task:e.target.value})}/>
    <br/>
    <Button
    type="submit"
    variant="contained"
    size="small"
    sx={{
      margin:"0.9rem 0rem",
      fonFamily:"'Abel','sanSerif'"
    }}
    >Add task</Button>
    </Form></>
  )
}

export default Addtasks