import React from 'react';
import Link from './Link/Link';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { TiMediaRewind } from 'react-icons/ti';
import { HiGift } from 'react-icons/hi';
import { IoIosInformationCircle } from 'react-icons/io';

const Links = ({ auth, user, firebase }) => {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="links">
      <div
        onClick={() => {
          user ? signOut() : signIn();
        }}
      >
        <Link
          Icon={user ? IoLogOut : IoLogIn}
          text={user ? 'Logout' : 'Login'}
        />
      </div>

      <Link Icon={HiGift} text="Suggest" />
      <Link Icon={TiMediaRewind} text="History" />
      <Link Icon={IoIosInformationCircle} text="About" />
    </div>
  );
};

export default Links;
