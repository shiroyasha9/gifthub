import React from 'react';
import User from './User/User';
import Links from './Links/Links';
import Col from 'react-bootstrap/Col';
import Logo from './Logo/Logo';

const Dashboard = () => {
  return (
    <Col className="dashboard" md={3} lg={3}>
      <User />
      <Links />
      <Logo />
    </Col>
  );
};

export default Dashboard;
