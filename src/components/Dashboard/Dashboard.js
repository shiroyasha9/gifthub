import React from 'react';
import User from './User/User';
import Links from './Links/Links';
import Col from 'react-bootstrap/Col';
import Logo from './Logo/Logo';

const Dashboard = ({ auth, user, firebase }) => {
  return (
    <Col className="dashboard" md={4} lg={3} xl={3}>
      <User auth={auth} />
      <Links auth={auth} user={user} firebase={firebase} />
      <Logo />
    </Col>
  );
};

export default Dashboard;
