import React, { useContext } from "react";
import User from "./User/User";
import Links from "./Links/Links";
import Col from "react-bootstrap/Col";
import Logo from "./Logo/Logo";

const Dashboard = ({ GlassContext }) => {
  const { auth, user, firebase, changeShow } = useContext(GlassContext);
  return (
    <Col className="dashboard" md={4} lg={3} xl={3}>
      <div className="dashboards">
        <User auth={auth} />
        <Links
          auth={auth}
          user={user}
          firebase={firebase}
          changeShow={changeShow}
        />
        <Logo />
      </div>
    </Col>
  );
};

export default Dashboard;
