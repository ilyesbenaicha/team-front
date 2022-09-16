import React, { useEffect } from 'react'
import { FormSelect } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {  Card, CardText, CardTitle, Col, Row } from 'reactstrap'
import { getTask } from '../../slices/taskSlice';

function TasksList() {
   
    const dispatch = useDispatch()
    const tasks = useSelector((state)=>state.tasks);
    const [listOftasks]= tasks.tasks 
    useEffect(() => {
      dispatch(getTask())
    }, [dispatch]);
console.log("listOfTasks",listOftasks)
  return (
    <div>
    <Row>
    <Row>
    <Col md="6" lg="3">
    <Card body color="light-success">
    <CardTitle tag="h5">TASKS</CardTitle>
    <CardText>
   Total  {tasks.tasks.length} 
        </CardText>
    </Card></Col> <Col md="3" lg="6">
        <FormSelect>
            <option> </option>
        </FormSelect>
    </Col></Row>
    <Col md="6" lg="3">
      <Card body color="primary" inverse>
        <CardTitle tag="h5">Do it</CardTitle>
        <CardText>
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