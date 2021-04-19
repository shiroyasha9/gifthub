import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Dashboard from '../components/Dashboard/Dashboard';
import Content from '../components/Contents/Content';
import Row from 'react-bootstrap/Row';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyBWeq3fmX7cSht3ChiUZC9KGULCD9aTTI0',
  authDomain: 'gifthub-34e0d.firebaseapp.com',
  projectId: 'gifthub-34e0d',
  storageBucket: 'gifthub-34e0d.appspot.com',
  messagingSenderId: '93972760268',
  appId: '1:93972760268:web:7fd9aaf811c1c73ca2a469',
  measurementId: 'G-RBHFE6QZBP',
});

const auth = firebase.auth();

const Glass = () => {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState('home');
  const changeShow = page => {
    setShow(page);
  };
  return (
    <div>
      <main>
        <Container className="main-container">
          <Row className="glass">
            <Dashboard
              auth={auth}
              user={user}
              firebase={firebase}
              changeShow={changeShow}
            />
            <Content auth={auth} show={show} changeShow={changeShow} />
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Glass;
