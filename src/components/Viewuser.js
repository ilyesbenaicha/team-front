import React, { useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap';
import { Row } from 'reactstrap';

function Viewuser() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <> 
    
     <Button variant="primary" onClick={handleShow}>
   View
   </Button>
   <Modal 	size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid="md">
        <Row>



        </Row>
        </Container>
        </Modal.Body>
        </Modal>
   </>
  )
}

export default Viewuser