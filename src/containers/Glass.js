/** @format */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Dashboard from '../components/Dashboard/Dashboard';
import Content from '../components/Contents/Content';
import Row from 'react-bootstrap/Row';

const Glass = ({ AppContext }) => {
  return (
    <div>
      <main>
        <Container className='main-container'>
          <Row className='glass'>
            <Dashboard AppContext={AppContext} />
            <Content AppContext={AppContext} />
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Glass;
