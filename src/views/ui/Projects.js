import  React, { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'reactstrap';
import axios from 'axios';


export default function Projects() {
	const [startDte, setDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	console.log ("start",startDte)
	console.log ("end",endDate)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/getAll").then((res) => {
      console.log("res", res);
      setUsers(res.data);
    });
  }, []);
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
        <Form.Label>technology</Form.Label>
        <Form.Control/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>admin</Form.Label> <Form.Select defaultValue="Choose...">
          {users.map((el)=>(
           
            <option>{el.name}</option>
    
          
          ))}
          </Form.Select>
        </Form.Group>

       
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
		</>
	);
}