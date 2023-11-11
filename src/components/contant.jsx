import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Content = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8">
          <div className="rectangle">
            {person.length ? (
              person.map((element) => (
                <div
                  className="d-flex py-2 border-bottom mx-4"
                  key={element.id}
                >
                  <img
                    className="image-avatar"
                    src={element.image}
                    alt="Avatar"
                  />
                  <div className="py-1">
                    <p className="d-inline">{element.name}</p>
                    <p className="fs-7">{element.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="justify-content-center d-flex py-5">
                <h1>ليس لديك أي مواعيد</h1>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
