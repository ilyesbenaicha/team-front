import  React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'reactstrap';


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
		<Row>
		<Form> 
		<Col lg="4">
		  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
			<Form.Label>Title</Form.Label>
			<Form.Control
			  type="title"
			  id= "title"
			  name = "title"
			  autoFocus
			  onChange={(e)=>{setProject({...project,title:e.target.value})}}
			/>
		  </Form.Group>
		  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
		<Col>
		<DatePicker selected={startDte} onChange={date => setDate(date)} />
</Col>
<Col>
<DatePicker selected={endDate} onChange={date => setEndDate(date)} />
	</Col>

		  		
		<Button variant="primary" >
           Submit
          </Button></Col>
		</Form>
		</Row>
		</>
	);
}