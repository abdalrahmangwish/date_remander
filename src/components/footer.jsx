import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const footer = ({deleteAll ,onView}) => {
  return (
    <div>
      <Row className="justify-content-center ">
        <Col sm="8" className="py-3">
          <div className="d-flex justify-content-between">
            <Button className="btn-style" onClick={deleteAll}>مسح الكل</Button>
            <Button className="btn-style" onClick={onView}>عرض البيانات</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default footer;
