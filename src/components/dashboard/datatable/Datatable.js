import { DataGrid } from "@mui/x-data-grid"
import "../datatable/datatable.scss"
import { userColumns } from "../../../datatablesource"
import { Usersrows } from "../../../datatablesource"
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