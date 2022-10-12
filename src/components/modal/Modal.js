import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Row } from 'reactstrap';
 import { useDispatch,useSelector } from "react-redux";
 import { addUser } from '../../slices/userSlice';
import { Alert, CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';

export default function Example() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector((state)=>state.users)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({
    email: "",
    role: "",
    first_name : "",
    last_name:"",
    tel:"",
    adresse:"",
    department: null,
  });
  const [validated, setValidated] = useState(false);
 
  const handelSubmit=(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    dispatch(addUser(user));
     setUser({
       email: "",
       role: "",
       first_name : "",
       last_name:"",
       tel:"",
       adresse:"",
       department: null,
     });
    console.log("user=",user);

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add New User
      </Button>

      <Modal 	size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { 
          userState.addUserStatus === "rejected" ? (
            
            <Alert severity="error">{useState.addUserError}</Alert>
          ): null}
          {userState.addUserStatus === "success" ? (
            Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "user added",
      showConfirmButton: false,
      timer: 1500
    })
          // <Alert severity="success">User Added ...</Alert>
          ): null} 
       <Container fluid="md">
          <Form  onSubmit={handelSubmit} noValidate validated={validated}> 
          <Row>
          <Col lg="4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={user.email}
                onChange={(e)=>setUser({...user,email: e.target.value})}
                required
              />
               <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="FName"
                autoFocus
                value={user.first_name}
                onChange={(e)=>setUser({...user,first_name:e.target.value})}
                required
              />
               <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="LName"
                autoFocus
                value={user.last_name}
                onChange={(e)=>setUser({...user,last_name:e.target.value})}
                required
              />
               <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="Address"
                autoFocus
                value={user.adresse}
                onChange={(e)=>setUser({...user,adresse:e.target.value})}
                required
              />
               <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </Form.Group>
            </Col>
            <Col lg="4">  
            <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Department</Form.Label>    
          <Form.Select aria-label="Department" 

          value={user.department} 
          onChange={(e)=>setUser({...user,department:e.target.value})}>
      <option value="Android developer">Android developer</option>
      <option value="Software Development">Software Development</option>
      <option value="Devops Engineer">Devops Engineer</option>
      <option value="IOS Developer">IOS Developer</option>
      
         </Form.Select>
        </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tel</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+216"
                autoFocus
                value={user.tel}
                onChange={(e)=>setUser({...user,tel:e.target.value})}
          required
              />
            </Form.Group>
            <Form.Select className="mb-3" aria-label="Default select example"
            value={user.role}
            onChange={(e)=>setUser({...user,role:e.target.value})}
            >
                <option value="Admin">Admin</option>
                <option value="Employer">Employer</option>
            </Form.Select></Col></Row>
            <Button
          type="submit"
          variant="primary"
          size="small"
         
          sx={{
            margin: "0.9rem 0rem",
            fonFamily: "'Abel','sanSerif'"
          }}
          onClick={handleClose}
        >
{ 
  userState.addUserStatus === "pending" ?(
  <CircularProgress size={24} color = "secondary"/>
 ): "Add User"
      }
      
      </Button> 
          </Form>
          </Container>
        </Modal.Body>
    
      </Modal>
    </>
  );
}