import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
const AdminNavigation =[
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Tasks",
    href: "/Tasks",
    icon: "bi bi-list-task",
  },
  {
    title: "Task List",
    href: "/TasksList",
    icon: "bi bi-list-task",
  },
]
const UserNavigation= [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-person-square",
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: "bi bi-calendar",
  },

  {
    title:"Project",
    href : "/project",
    icon: "bi bi-folder",
  },
];

const Sidebar = () => {
  const loginStatus = useSelector((state)=>state.auth.loginStatus)
const token = localStorage.getItem("token");
   const user = token && jwtDecode(token);
  if(loginStatus  === "success") {
 
  if(user.role ==="admin"){
  }
}
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();


  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
        {user?.role ==="SuperAdmin" ?<div>{UserNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}</div>
           : 
           <div>{AdminNavigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}</div>
         } </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
