import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const header = ({person}) => {
  return (
    <div>
         <Row className="justify-content-center">
          <Col sm="8">
            <div>
              <p>لديك {person.length} مواعيد</p>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default header
