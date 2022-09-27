import { Alert, Button, CircularProgress, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Input, Label, Row  } from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "../../slices/taskSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import { FormSelect } from "react-bootstrap";
// import {toast} from "react-toastify";
function Addtasks() {
  const [startDte, setDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	//console.log ("start",startDte)
	//console.log ("end",endDate)
  const taskState = useSelector((state)=>state.tasks)
 //console.log(taskState);
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    etat : "Do it",
    startDte :"" ,
    endDate :"",
    user:"",
    Project:""
  });
  const token = localStorage.getItem("token");
   const user = token && jwtDecode(token);
  const [project, setProject] = useState([]);
  //console.log("user",user);
  //console.log("id of user",user.id);
  useEffect(() => {
      try {
      const result=axios.get(`http://localhost:5000/api/project/getprojectByuser/${user.id}`).then((res)=>{
          console.log("res.data",res.data);
        console.log("res",res);
        setProject(res.data); 
        })
        console.log("result",result);
       
      } catch (error) {
        console.log(error);
      }
    
  },[user.id]);  

  
  console.log("project",project._id);
  const [employer, setEmployer] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/getEmployer").then((res) => {
      console.log("res", res);
      setEmployer(res.data);
    });
  }, []);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    dispatch(addTask(task));
    setTask({
      title: "",
      description: "",
      etat:"Do it",
      start_date: "",
      end_date: "",
      user: "",
      project: "",
    }); 
  };
  console.log("task=", task);
  return (
    <>
    
      <Form onSubmit={handleSubmit} noValidate validated={validated}><Row>
      <Col md="3" lg="6">
      <FormGroup>
                <Label for="exampleSelectMulti">Developer</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                  onChange={(e) => setTask({ ...task, project: e.target.value })}
                  required
                >
                {
                  project.map((el)=>(<option value={el._id}>{el.title}</option>))
                }
                
                </Input>  
                
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
              </FormGroup>
        
    </Col>
      <Form.Group controlId="formGridEmail">
          <Form.Label>title</Form.Label>
          <Form.Control
           value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
           type="text" placeholder="Enter title" required />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
         <br/>
        <Form.Group  controlId="exampleForm.">
          <Form.Label>description</Form.Label>
          <Form.Control  type="text"  
           value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })} required/>
        </Form.Group>
        <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
    <br/>
        <FormGroup>
        <Form.Label>Start Date</Form.Label>
        <DatePicker
         format='yyyy-MM-dd'
                selected={startDte}
                onChange={(date) => setDate(date)}
                selectsStart
                startDate={startDte}
                endDate={endDate}
                value={startDte}
                onClickOutside={(e) => setTask({ ...task, start_date: e.target.value })}
                required
            />
            
             <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
                 <Form.Label>End Date</Form.Label>
            <DatePicker	
            format='yyyy-MM-dd'
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDte}
                endDate={endDate}
                minDate={startDte}
                value={endDate}
                onClickOutside={(e) => setTask({ ...task, end_date: e.target.value })}
                required
            />
             <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </FormGroup>
 <br/>
 <FormGroup>
                <Label for="exampleSelectMulti">Developer</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                  onChange={(e) => setTask({ ...task, user: e.target.value })}
                  required
                >
                {
                  employer.map((el)=>(
                    <option value={el._id}>{el.first_name}</option>
                    
                 ))
                }
                
                </Input>  
                
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
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
}      
  </Button>
          {taskState.addTodoStatus === "rejected" ? (
            <Alert severity="error">{taskState.addtodoError}</Alert>
              ): null}
          {taskState.addTodoStatus === "success" ? (
            Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Task Added ...',
  showConfirmButton: false,
  timer: 1500
}),
            <Alert severity="success">Task Added ...</Alert>
          ): null}
     </Row> </Form>
    </>
  );
}

export default Addtasks;
