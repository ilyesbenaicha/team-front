import { Button, Card, CardHeader, CardText, CardTitle, Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

import Blog from "../components/dashboard/Blog";

import TasksTable from "../components/dashboard/TasksTable";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../slices/projectSlice";
import { getUser } from "../slices/userSlice";


const Starter = () => {
  const projectList= useSelector(state=>state.projects.projects)
  const userList= useSelector(state=>state.users.users)
  const [users,setusers]= useState(userList)
  const [projects, setProjects] = useState(projectList);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getProject())
}, [dispatch]);
useEffect(() => {
  setProjects(projectList)
}, [projectList])
 // const loginStatus = useSelector((state)=>state.auth.loginStatus)
  const token = localStorage.getItem("token");
     const user = token && jwtDecode(token);

    useEffect(()=>{
      dispatch(getUser())
    },[dispatch])
    useEffect(() => {
      setusers(userList)
    }, [userList])
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col xs="6" md="4">
          <Feeds/>
        </Col>
      </Row>
      {user?.role ==="SuperAdmin"?    <Row>
      <Col md="6" lg="3">
      <Card body color="info" inverse>
        <CardTitle tag="h5">Projects</CardTitle>
        <CardText>
   You have   {projects.length}
        </CardText>
        <div>
        <a href="/project" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Go To Projects</a>
            </div>
      </Card>
    </Col>
    <Col md="6" lg="3">
      <Card body color="info" inverse>
        <CardTitle tag="h5">Users</CardTitle>
        <CardText>
You have  {users.length}
        </CardText>
        <div>
        <a href="/users" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Go To Users</a>
            </div>
      </Card>
    </Col>
   
      </Row>:null}
      {/***Table ***/}
      <Row>
        <Col lg="12">
      {user?.role ==="SuperAdmin"? <ProjectTables />: null}
{user?.role ==="Admin"?        <TasksTable/> :null}      </Col>
      </Row>
      {/***Blog Cards***/}
      {user?.role ==="SuperAdmin"? 
      <Row>
        {projects.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              title={blg.title}
              text={blg.description}
              createdAt={blg.createdAt}
            />
          </Col>
        ))}
      </Row>:null}
    </div>
  );
};

export default Starter;
