import user1 from "../src/assets/images/users/user1.jpg";
import user2 from "../src/assets/images/users/user2.jpg";
import user3 from "../src/assets/images/users/user3.jpg";
import user4 from "../src/assets/images/users/user4.jpg";
import user5 from "../src/assets/images/users/user5.jpg";
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'User', headerName: 'User', width: 250, renderCell : (params)=>{
        return(
            <div className="cellWithImg">
                <img className="rounded-circle"src={params.row.avatar}     
                        alt="avatar"
                        width="45"
                        height="45"/>
            {params.row.name}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
    },
    { field: 'status', headerName: 'Status', width:150},

]
export const Usersrows = [
    {
        id: 1,  
      avatar: user1,
      name: "Hanna Gover",
      email: "hgover@gmail.com",
      age:" 35",
      status: "pending",
      weeks: "35",
      budget: "95K",
    },
    {   id:2,
        avatar: user2,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
        age:" 40",
        status: "pending",
        weeks: "35",
        budget: "95K",
    },
    {id:3,
      avatar: user3,
      name: "Hanna Gover",
      email: "hgover@gmail.com",
        age:" 30",
      status: "holt",
      weeks: "35",
      budget: "95K",
    },
    {
        id: 4,
      avatar: user4,
      name: "Hanna Gover",
      email: "Hanna Gover@gmail.com",
        age:" 15",
      status: "pending",
      weeks: "35",
      budget: "95K",
    },
    {id: 5,
      avatar: user5,
      name: "Hanna Gover",
      email: "hgover@gmail.com",
        age:" 24",
      status: "done",
      weeks: "35",
      budget: "95K",
    },
    {id: 6,
        avatar: user5,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
          age:" 24",
        status: "done",
        weeks: "35",
        budget: "95K",
      },
      {id: 7,
        avatar: user5,
        name: "Hanna Gover",
        email: "hgover@gmail.com",
          age:" 24",
        status: "done",
        weeks: "35",
        budget: "95K",
      },
  ];