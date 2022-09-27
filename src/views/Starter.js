import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import TasksTable from "../components/dashboard/TasksTable";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../slices/projectSlice";


const Starter = () => {
  const projectList= useSelector(state=>state.projects.projects)

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
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        {/* <Col lg="12">
          <ProjectTables />
        </Col> */}
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
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>:null}
    </div>
  );
};

export default Starter;
