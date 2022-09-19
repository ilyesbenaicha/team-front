import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
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

return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Project</th>

                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((tasks, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">

                      <div className="ms-3">
                        {/* <h6 className="mb-0">{tasks.user.last_name}</h6> */}
                        {/* <span className="text-muted">{tasks.user.email}</span> */}
                      </div>
                    </div>
                  </td>
                  <td>{tasks.title}</td>
                  <td>
                    {tasks.etat === "Do it" ? (
                      <span className="p-2 bg-primary rounded-circle d-inline-block ms-3"></span>
                    ):
                    tasks.etat === "AWAITING REVIEW" ? (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )
                     : tasks.etat === "In Progress" ? (
                      <span className="p-2 bg-info rounded-circle d-inline-block ms-3"></span>
                    ) 
                    : tasks.etat === "DONE" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )
                    : (
                      <span className="p-2 bg-white rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tasks.etat}</td>
                  <td>{tasks.budget}</td>
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

