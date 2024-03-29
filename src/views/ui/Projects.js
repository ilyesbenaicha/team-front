import  React, { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';

export default function Projects() {
	const [startDte, setDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	console.log ("start",startDte)
	console.log ("end",endDate)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/getAdmin").then((res) => {
      console.log("res", res);
      setUsers(res.data);
    });
  }, []);
	const [project,setProject] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    user: ""
		
	   })
console.log(project);
const handleSubmit = (e) => {
  e.preventDefault();

  setProject({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    user: ""
  }); 
  console.log("Project =", project);
};
	return (
		<>	
	
	<Form onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Form.Group as={Col}  md="3" controlId="formGridEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" 

value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}            
          />
        </Form.Group>

        <Form.Group as={Col} md="6"   controlId="exampleForm.ControlTextarea1">
          <Form.Label>description</Form.Label>
          <Form.Control as="textarea" 
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
           />
        </Form.Group>
      </Row>
<Col >
      <Form.Group className="mb-3" as={Col}  md="4" controlId="formGridAddress1">
      
       <DatePicker
                selected={startDte}
                onChange={(date) => setDate(date)}
                selectsStart
                startDate={startDte}
                endDate={endDate}
                
            />  </Form.Group>
              <Form.Group className="mb-3" as={Col}  md="4" controlId="formGridAddress1">
            <DatePicker	
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDte}
                endDate={endDate}
                minDate={startDte}
            />
      </Form.Group>
</Col>
      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>technology</Form.Label>
        <Form.Control/>
      </Form.Group> */}

      <Row className="mb-3">
      {/* value={user.department} 
          onChange={(e)=>setUser({...user,department:e.target.value})} */}
      <Form.Group as={Col}   md="4" controlId="formGridState" aria-setsize={-1}>
          <Form.Label>Department</Form.Label>    
          <Form.Select aria-label="Department" 
         >
      <option value="Android developer">Android developer</option>
      <option value="Software Development">Software Development</option>
      <option value="Devops Engineer">Devops Engineer</option>
      <option value="IOS Developer">IOS Developer</option>
         </Form.Select>
        </Form.Group>
    
        <Form.Group as={Col}   md="4" controlId="formGridState">
          <Form.Label>admin</Form.Label> <Form.Select defaultValue="Choose..."
                            onChange={(e) => setProject({ ...project, user: e.target.value })}

          >
          {users.map((el)=>(
           
            <option value={el._id} >{el.first_name}</option>
    
          
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