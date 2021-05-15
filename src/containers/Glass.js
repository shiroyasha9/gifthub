import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Dashboard from "../components/Dashboard/Dashboard";
import Content from "../components/Contents/Content";
import Row from "react-bootstrap/Row";
import firebase from "../firebase";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

const GlassContext = React.createContext();

const Glass = () => {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState("home");
  const changeShow = (page) => {
    setShow(page);
  };
  return (
    <GlassContext.Provider value={{ auth, user, firebase, show, changeShow }}>
      <div>
        <main>
          <Container className="main-container">
            <Row className="glass">
              <Dashboard GlassContext={GlassContext} />
              <Content GlassContext={GlassContext} />
            </Row>
          </Container>
        </main>
      </div>
    </GlassContext.Provider>
  );
};

export default Glass;
