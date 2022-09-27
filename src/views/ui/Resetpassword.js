import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'reactstrap';

function Resetpassword() {
  return (
    <Row>
    <Container>
    <Col xs lg="2">
    <Form>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Current Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></Col></Container></Row>
  );
}

export default Resetpassword;