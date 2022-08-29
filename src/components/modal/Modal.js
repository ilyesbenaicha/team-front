import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Row } from 'reactstrap';

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({
    email: "",
    role: "",
    first_name : "",
    tel:"",
    adresse:"",
    department:"",
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add
      </Button>

      <Modal 	size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="FName"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="LName"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="Address"
                autoFocus
              />
            </Form.Group>
            </Col>
            <Col lg="4">  
            <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Department</Form.Label>    
          <Form.Select aria-label="Department">
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
                
              />
            </Form.Group>
            <Form.Select className="mb-3" aria-label="Default select example">
       
                <option value="1">Admin</option>
                <option value="2">User</option>
            </Form.Select></Col></Row>
          </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}