/** @format */

import Layout from './Layout';
import Glass from './Glass';
import React, { useState } from 'react';
import firebase from '../firebase';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const AppContext = React.createContext();

const Structure = () => {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState('home');
  const changeShow = (page) => {
    setShow(page);
  };
  return (
    <AppContext.Provider value={{ auth, user, firebase, show, changeShow }}>
      <Layout AppContext={AppContext} />
      <Glass AppContext={AppContext} />
    </AppContext.Provider>
  );
};

export default Structure;
