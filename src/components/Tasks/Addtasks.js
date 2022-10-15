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
import { FormSelect, Offcanvas } from "react-bootstrap";
import { format } from "date-fns";
// import {toast} from "react-toastify";
function Addtasks() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
	console.log ("start",startDate)
	console.log ("end",endDate)
  const taskState = useSelector((state)=>state.tasks)
 //console.log(taskState);
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    etat : "Do it",
    start_date :"" ,
    end_date :"",
    user:"",
    project:""
  });
  const token = localStorage.getItem("token");
   const user = token && jwtDecode(token);
  const [project, setProject] = useState([]);
  console.log("user",user);
  console.log("id of user",user.id);
  //const [Cdate, setDatee] = useState(new Date().toLocaleDateString('fr-FR'));
  useEffect(() => {
      try {
      const result=axios.get(`https://teams-back.mobelite.fr/api/project/getprojectByuser/${user.id}`).then((res)=>{
          console.log("res.data",res.data);
        console.log("res",res);
        setProject(res.data); 
        })
        console.log("result",result);
       
      } catch (error) {
        console.log(error);
      }
    
  },[user.id]);  

  
  
  const [employer, setEmployer] = useState([]);

  useEffect(() => {
    axios.get("https://teams-back.mobelite.fr/api/user/getEmployer").then((res) => {
      console.log("res", res);
      setEmployer(res.data);
    });
  }, []);
  
  const handleSubmit = (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }

    // setValidated(true);
    dispatch(addTask({...task,end_date:endDate,start_date:startDate}));
    
  };
  console.log(" new task=", task);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <Button    type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fonFamily: "'Abel','sanSerif'"
          }} onClick={handleShow}>
        Add
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add new Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form onSubmit={handleSubmit}><Row>
      <Col md="3" lg="6">
      <FormGroup>
      <Col>
        <FormSelect  onChange={(e) => setTask({ ...task, project: e.target.value })}>
        {
                  project.map((el)=>(<option value={el._id}>{el.title}</option>))
                }
        </FormSelect>
    </Col>
               
                
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
     <Col sm={10}>
     <FormGroup>
        <Form.Label>Start Date</Form.Label>
        <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
                 <Form.Label>End Date</Form.Label>
            <DatePicker	
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
            </FormGroup></Col>
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
              
              <Button variant="primary" type="submit">
        Submit
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
        </Offcanvas.Body>
      </Offcanvas>
    
     
    </>
  );
}

export default Addtasks;
