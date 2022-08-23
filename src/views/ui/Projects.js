import  React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'reactstrap';
import DropDown from '../../components/DropDown/DropDown';


export default function Projects() {
	const [startDte, setDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	console.log ("start",startDte)
	console.log ("end",endDate)

	const [project,setProject] = useState({
		title : "",
		startDte ,
		endDate
		
	   })
console.log(project);
	return (
		<>	
	
	<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>description</Form.Label>
          <Form.Control as="textarea"  />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
	  <DatePicker
                selected={startDte}
                onChange={(date) => setDate(date)}
                selectsStart
                startDate={startDte}
                endDate={endDate}
            />
            <DatePicker	
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDte}
                endDate={endDate}
                minDate={startDte}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
		</>
	);
}