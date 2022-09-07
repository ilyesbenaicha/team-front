import { Alert, Button, CircularProgress, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Input, Label, Row, Spinner } from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "../../slices/taskSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import axios from "axios";
function Addtasks() {
  const [startDte, setDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	console.log ("start",startDte)
	console.log ("end",endDate)
  const taskState = useSelector((state)=>state.tasks)
 console.log(taskState);
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    etat : "Do it",
    startDte ,
    endDate,
    user:""
  });
  const [employer, setEmployer] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/getEmployer").then((res) => {
      console.log("res", res);
      setEmployer(res.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({
      title: "",
      description: "",
      etat:"Do it",
      start_date: "",
      end_date: "",
      user: ""
    }); 
    console.log("task=", task);
  };
  return (
    <>
    
      <Form onSubmit={handleSubmit}><Row>
      <Form.Group controlId="formGridEmail">
          <Form.Label>title</Form.Label>
          <Form.Control
           value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
           type="text" placeholder="Enter title" />
        </Form.Group>
              
         <br/>
        <Form.Group  controlId="exampleForm.">
          <Form.Label>description</Form.Label>
          <Form.Control  type="text"  
           value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })} />
        </Form.Group>
       
    <br/>
        <FormGroup>
        <Form.Label>Start Date</Form.Label>
        <DatePicker
                selected={startDte}
                onChange={(date) => setDate(date)}
                selectsStart
                startDate={startDte}
                endDate={endDate}
            />
                 <Form.Label>End Date</Form.Label>
            <DatePicker	
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDte}
                endDate={endDate}
                minDate={startDte}
            />
            </FormGroup>
 <br/>
 <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                  onChange={(e) => setTask({ ...task, user: e.target.value })}

                >
                {
                  employer.map((el)=>(
                    <option value={el._id}>{el.first_name}</option>
                    
                 ))
                }
                  
                </Input>  
              </FormGroup>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fonFamily: "'Abel','sanSerif'"
          }}
        >
{
 taskState.addTodoStatus === "pending" ?(
  <CircularProgress size={24} color = "secondary"/>
 ): "Add Task"
}        </Button>
          {taskState.addTodoStatus === "rejected" ? (
            <Alert severity="error">{taskState.addtodoError}</Alert>
          ): null}
          {taskState.addTodoStatus === "success" ? (
            <Alert severity="success">Task Added ...</Alert>
          ): null}
     </Row> </Form>
    </>
  );
}

export default Addtasks;
