import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FormSelect } from 'react-bootstrap';
import { Col, FormGroup, Row } from 'reactstrap'
import TaskItem from './TaskItem'

function ListTaskItem() {
  const BlogData = [
    {
      
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btn: "primary",
    },
    {
    
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btn: "primary",
    },
    {
     
      title: "Don't Lamp blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btn: "primary",
    },
    {
     
      title: "Simple is beautiful",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btn: "primary",
    },
  ];
  const [proSel, setProSel] = useState();
  console.log(" proSel",proSel);
 
  const token = localStorage.getItem("token");
  const user = token && jwtDecode(token);
 const [project, setProject] = useState([]);
 const [task, setTask]= useState([]);

  useEffect(() => {
    try {
    const result=axios.get(`https://teams-back.mobelite.fr/api/project/getprojectByuser/${user.id}`).then((res)=>{
        console.log("res.data",res.data);
      console.log("res",res);
      setProject(res.data); 
      })
      console.log("result",result);
      return result; 
    } catch (error) {
      console.log(error);
    }
},[user.id]);  


useEffect(() => {
  try {
  const result=axios.get(`https://teams-back.mobelite.fr/api/task/getTaskByproject/${proSel.proSel}`).then((res)=>{
      console.log("res.data",res.data);
    console.log("res",res);
    setTask(res.data); 
    })
    console.log("result",result);
   
  } catch (error) {
    console.log(error);
  }

},[proSel]);  
console.log("task",task);
  return (
    
    <div>
    <FormGroup>
    <Col md="3" lg="6">
        <FormSelect  onChange={(e) => setProSel({ ...proSel, proSel: e.target.value })}>
        {project.map((p)=>(
          <option value={p._id}>{p.title}</option>
        ))}
            
        </FormSelect>
    </Col>
              </FormGroup>
    <h5 className="mb-3">Tasks</h5>
    <Row>
      {task.map((blg, index) => (
        <Col sm="6" lg="6" xl="3" key={index}>
          <TaskItem

          
            title={blg?.title}
            subtitle={blg?.description}
            etat={blg?.etat}
            user={blg?.user.first_name}
            startdate={blg?.start_date}
            enddate={blg?.end_date}
          />
        </Col>
      ))}
    </Row></div>
  )
}

export default ListTaskItem