import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import { useState } from "react";

// const token = localStorage.getItem("token");
// if( token == null) {
// console.log('token null aaaa',token)
// }
// console.log("token",token);
// const user = jwt(token);
// console.log("sssssssss",user);
// if(user.role ==="admin"){
  
// }
const navigation = [
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
    title: "Tasks",
    href: "/Tasks",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
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
    title: "Breadcrumbs",
    href: "/breadcrumbs",
    icon: "bi bi-link",
  },
];

const UserNavigation= [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  
  {
    title: "Tasks",
    href: "/Tasks",
    icon: "bi bi-patch-check",
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: "bi bi-hdd-stack",
  },
 
 
  
 

];

const Sidebar = () => {
  // const navigate = useNavigate();
  // if( token == null) {
  //   console.log('token null aaaa',token)
  //   navigate("/");
  //   }
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
        {/* {user.role==="SuperAdmin" ?<div>{navigation.map((navi, index) => (
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
          ))}</div> */}
           : 
           <div>{UserNavigation.map((navi, index) => (
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
           }
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
