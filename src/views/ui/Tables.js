import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col} from "reactstrap";
import TasksTable from "../../components/dashboard/TasksTable";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";


const Tables = () => {
  const loginStatus = useSelector((state)=>state.auth.loginStatus)
const token = localStorage.getItem("token");
   const user = token && jwtDecode(token);
  if(loginStatus  === "success") {
 
  if(user.role ==="admin"){
  }
}
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
      {user?.role ==="SuperAdmin"? <ProjectTables />: null}
{user?.role ==="Admin"?        <TasksTable/> :null}      </Col>
    </Row>
  );
};

export default Tables;
