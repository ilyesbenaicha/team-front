import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    CardFooter,
  } from "reactstrap";
  
  const TaskItem = (props) => {
    return (
      <Card  border="primary" style={{ width: '18rem' }}>
        <CardBody className="p-4">
          <CardTitle tag="h5">{props.title}</CardTitle>
          
          <CardText className="mt-3">{props.description}</CardText>
          <CardSubtitle >{props.user}</CardSubtitle>
          <CardText>{props.startdate}</CardText>
          <CardText>{props.enddate}</CardText>
        </CardBody>
        <CardFooter>
        {props.etat === "Do it" ? (
                      <span className="p-2 bg-primary rounded-circle d-inline-block ms-3"> Do it</span>
                    ):
                    props.etat === "AWAITING REVIEW" ? (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3">AWAITING REVIEW</span>
                    )
                     : props.etat === "In Progress" ? (
                      <span className="p-2 bg-info rounded-circle d-inline-block ms-3">In Progress</span>
                    ) 
                    : props.etat === "DONE" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3">DONE</span>
                    )
                    : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
        </CardFooter>
      </Card>
    );
  };
  
  export default TaskItem;
  