import { DataGrid } from "@mui/x-data-grid"
import "../datatable/datatable.scss"
import { userColumns } from "../../../datatablesource"
import { Usersrows } from "../../../datatablesource"
import { Link } from "react-router-dom"
function Datatable() {
    const actionColumn=[{field: "action",headerName:"Action",width:200,renderCell:()=>{
        return (  
            <div className="cellAction">
                <div className="viewButton">View</div>
      
                <div className="DeleteButton">Delete</div>
            </div>
        )  
    }}]
    return (
        
        <div style={{ height: 400, width: '100%' }}>
            <div className="datatableTitle">
            ADD New User
<Link to="/new"style={{textDecoration: "none"}}>
Add New
</Link>
            </div>
          <DataGrid
            rows={Usersrows}
            columns={userColumns.concat(actionColumn) }
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>  )
}

export default Datatable