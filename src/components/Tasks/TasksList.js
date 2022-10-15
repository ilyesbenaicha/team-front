import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FormSelect } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {  Card, CardText, CardTitle, Col, Row } from 'reactstrap'
import { getTask } from '../../slices/taskSlice';

function TasksList() {
   
  const taskList= useSelector(state=>state.tasks.tasks)
  const [tasks, setTasks] = useState(taskList);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTask())
  }, [dispatch]);
  useEffect(() => {
    setTasks(taskList)
  }, [taskList]); 
console.log("listOfTasks",taskList)
const [users ,setUsers] =useState([])
useEffect(() => {
  axios.get("https://teams-back.mobelite.fr/api/project/getprojectByuser").then((res) => {
    console.log("res", res);
    setUsers(res.data);
  });
}, []);
  return (
    <div>
    <Row>
    <Row>
    <Col md="6" lg="3">
    <Card body color="light-success">
    <CardTitle tag="h5">TASKS</CardTitle>
    <CardText>
   Total  {tasks.length} 
        </CardText>
    </Card></Col> <Col md="3" lg="6">
        <FormSelect >
            <option>team project</option>
        </FormSelect>
    </Col></Row>
    <Col md="6" lg="3">
      <Card body color="primary" inverse>
        <CardTitle tag="h5">Do it</CardTitle>
        <CardText>
        {tasks.etat === "Do it"?(<span>{tasks.etat}</span>):null}
        </CardText>
      </Card>
    </Col>
    <Col md="6" lg="3">
      <Card body color="info" inverse>
        <CardTitle tag="h5">In Progress</CardTitle>
        <CardText>
     
        </CardText>
      </Card>
    </Col>
    <Col md="6" lg="3">
      <Card body color="success" inverse>
        <CardTitle tag="h5">AWAITING REVIEW</CardTitle>
        <CardText>
        </CardText>
        
      </Card>
    </Col>
    <Col md="6" lg="3">
      <Card body color="danger" inverse>
        <CardTitle tag="h5">DONE</CardTitle>
        <CardText>
        </CardText>
      </Card>
    </Col>
  </Row></div>
  )
}

export default TasksList