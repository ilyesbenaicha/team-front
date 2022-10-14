import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  CardFooter,
} from "reactstrap";
import DayJS from 'react-dayjs';
const Blog = (props) => {
  return (
    <Card>
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <div>
              <Button color="light-warning">Read More</Button>
            </div>
      </CardBody>
      <CardFooter>
      <DayJS format="DD-MM-YYYY">{props.createdAt}</DayJS>
        </CardFooter>
      
    </Card>
  );
};

export default Blog;
