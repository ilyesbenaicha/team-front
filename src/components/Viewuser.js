import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { getUser } from '../slices/userSlice';

function Viewuser(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [oneUser,setoneUser] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);
  return (
    
    <>
      <Button variant="primary" onClick={handleShow}>
       Viewuser
      </Button>

      <Modal 	size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
          <Modal.Title>{props.id}</Modal.Title>
        </Modal.Header>
   
        <Modal.Body>
 
       <Container fluid="md">
          <Form > 
          <Row>
          <Col lg="4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
         
                required
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="FName"
                autoFocus
        
                required
              />
         
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="LName"
                autoFocus
   
                required
              />
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="Address"
                autoFocus
              
                required
              />
         
            </Form.Group>
            </Col>
            <Col lg="4">  
            <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Department</Form.Label>    
          <Form.Select aria-label="Department" 

        >
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
            
          required
              />
            </Form.Group>
            <Form.Select className="mb-3" aria-label="Default select example"
       
            >
                <option value="Admin">Admin</option>
                <option value="Employer">Employer</option>
            </Form.Select></Col></Row>
          </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Viewuser;