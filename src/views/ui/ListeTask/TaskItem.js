import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
  
  const TaskItem = (props) => {
    return (
      <Card>
        <CardBody className="p-4">
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle>{props.user}</CardSubtitle>
          <CardText className="mt-3">{props.description}</CardText>
          <Button color={props.color}>Read More</Button>
        </CardBody>
      </Card>
    );
  };
  
  export default TaskItem;
  