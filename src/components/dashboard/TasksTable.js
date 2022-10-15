import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle, Table, CardText } from "reactstrap";
import { getTask } from "../../slices/taskSlice";
// import user1 from "../../assets/images/users/user1.jpg";
// import user2 from "../../assets/images/users/user2.jpg";
// import user3 from "../../assets/images/users/user3.jpg";
// import user4 from "../../assets/images/users/user4.jpg";
// import user5 from "../../assets/images/users/user5.jpg";

// const tableData = [
//   {
//     avatar: user1,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Flexy React",
//     status: "pending",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user2,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Lading pro React",
//     status: "done",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user3,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Elite React",
//     status: "holt",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user4,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Flexy React",
//     status: "pending",
//     weeks: "35",
//     budget: "95K",
//   },
//   {
//     avatar: user5,
//     name: "Hanna Gover",
//     email: "hgover@gmail.com",
//     project: "Ample React",
//     status: "done",
//     weeks: "35",
//     budget: "95K",
//   },
// ];

const TasksTable = () => {
    const taskList= useSelector(state=>state.tasks.tasks)
    const [tasks, setTasks] = useState(taskList);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getTask())
    }, [dispatch]);
    useEffect(() => {
      setTasks(taskList)
    }, [taskList]); 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
return (
    <div>
    <Col lg="3">
   <Card body color="primary" inverse>
        <CardTitle tag="h5">total</CardTitle>
        <CardText>
        {tasks.length}
        </CardText>
      </Card></Col>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Tasks Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Tasks
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Developer</th>
                <th>tasks</th>

                <th>Status</th>
                <th>Start Date</th>
                <th> End Date</th>
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">

                      <div className="ms-3">
                        <h6 className="mb-0">{task.user?.last_name}</h6> 
                         <span className="text-muted">{task.user?.email}</span> 
                      </div>
                    </div>
                  </td>
                  <td>{task.title}</td>
                  <td>
                    {task.etat === "Do it" ? (
                      <span className="p-2 bg-primary rounded-circle d-inline-block ms-3"></span>
                    ):
                    task.etat === "AWAITING REVIEW" ? (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )
                     : task.etat === "In Progress" ? (
                      <span className="p-2 bg-info rounded-circle d-inline-block ms-3"></span>
                    ) 
                    : task.etat === "DONE" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )
                    : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{new Date (task.start_date).toLocaleDateString("en-US", options)}</td>
                  <td>{new Date (task.end_date).toLocaleDateString("en-US", options)}</td>

                  <td>{task.project?.title}</td>
                </tr>
              ))}
          
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default TasksTable;

