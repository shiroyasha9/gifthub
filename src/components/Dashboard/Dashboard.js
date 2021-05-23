/** @format */

import React, { useContext } from 'react';
import User from './User/User';
import Links from './Links/Links';
import Col from 'react-bootstrap/Col';
import Logo from './Logo/Logo';

const Dashboard = ({ AppContext }) => {
  const { auth, user, firebase, changeShow } = useContext(AppContext);
  return (
    <Col className='dashboard' md={4} lg={3} xl={3}>
      <div className='dashboards'>
        <User auth={auth} />
        <Links
          auth={auth}
          user={user}
          firebase={firebase}
          changeShow={changeShow}
          mobile={false}
        />
        <Logo />
      </div>
    </Col>
  );
};

export default Dashboard;
