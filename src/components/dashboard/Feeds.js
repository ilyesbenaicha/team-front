import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import DayJS from 'react-dayjs';
import moment from "moment/moment";




const FeedData = [
  {
    title: "Cras justo odio",
    icon: "bi bi-bell",
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "New user registered.",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "New order received.",
    icon: "bi bi-bag-check",
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "Cras justo odio",
    icon: "bi bi-bell",
    color: "dark",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "warning",
    date: "6 minute ago",
  },
];

const Feeds = () => {
  const token = localStorage.getItem("token");
   const user = token && jwtDecode(token);
  const [project, setProject] = useState([]);
  //console.log("user",user);
  //console.log("id of user",user.id);
  useEffect(() => {
      try {
      const result=axios.get(`http://localhost:5000/api/project/getprojectByuser/${user.id}`).then((res)=>{
          console.log("res.data",res.data);
        console.log("res",res);
        setProject(res.data); 
        })
        console.log("result",result);
       
      } catch (error) {
        console.log(error);
      }
    
  },[user.id]);  
  let
  date1 = moment( "2016-04-27" ),
  date2 = moment( "2016-09-05" ),
  date1Week = date1.week(),
  date2Week = date2.week(),
  deltaWeek = Math.abs( date1Week - date2Week );
 
console.log( date1.format( "YYYY-MM-DDTHH:mm:ss.SSSZZ" ), date1Week );
console.log( date2.format( "YYYY-MM-DDTHH:mm:ss.SSSZZ" ), date2Week );
console.log( deltaWeek );
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {project.map((el, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
              color="red"
            >
              {el.title}
              <small className="ms-auto text-muted text-small" >
               <DayJS format="DD-MM-YYYY" className="date" element="span">{el.createdAt}</DayJS> 
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
