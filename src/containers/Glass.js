import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Circle from '../components/Circle';
import Dashboard from '../components/Dashboard/Dashboard';
import Content from '../components/Content/Content';
import Row from 'react-bootstrap/Row';

const Glass = () => {
  return (
    <div class="main-content">
      <main>
        <Container className="main-container">
          <Row className="glass">
            <Dashboard />
            <Content />
          </Row>
          <Circle />
        </Container>
      </main>
    </div>
  );
};

export default Glass;
