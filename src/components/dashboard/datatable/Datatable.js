import "../datatable/datatable.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Table } from "reactstrap";
function Datatable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/getAll").then((res) => {
      console.log("res", res);
      setUsers(res.data);
    });
  }, []);

  console.log("users", users);
  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: () => {
  //       return (
  //         <div className="cellAction">
  //           <div className="viewButton">View</div>

  //           <div className="DeleteButton">Delete</div>
  //         </div>
  //       );
  //     }
  //   }
 // ];
  return (
    // <div style={{ height: 400, width: "100%" }}>
    //   <div className="datatableTitle">
    //     <Link to="/users/new"> New user</Link>
    //   </div>
    //   {/* {users.map((user)={

    //   })} */}
    //   <DataGrid
    //     rows={users}
    //     columns={userColumns.concat(actionColumn)}
    //     pageSize={5}
    //     rowsPerPageOptions={[5]}
    //     checkboxSelection
    //   />
    // </div>
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
              <th>ID</th>
              <th>EMAIL</th>

              <th>NAME</th>
              <th>ROLE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-top">
                <td>
                  <div className="d-flex align-items-center p-2">
                    {/* <img
                      src={tdata.avatar}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    /> */}
                    <div className="ms-3">
                      <h6 className="mb-0">{index+1}</h6>
                      {/* <span className="text-muted">{user.email}</span> */}
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                {/* <td>
                  {tdata.status === "pending" ? (
                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                  ) : tdata.status === "holt" ? (
                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                  ) : (
                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                  )}
                </td> */}
                <td>{user.name}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </div>
  );
}

export default Datatable;
