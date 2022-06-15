import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col} from "reactstrap";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>
    </Row>
  );
};

export default Tables;
