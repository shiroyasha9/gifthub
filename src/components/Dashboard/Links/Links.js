import React, { Fragment } from 'react';
import Link from './Link/Link';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { TiMediaRewind } from 'react-icons/ti';
import { HiGift } from 'react-icons/hi';
import { IoIosInformationCircle } from 'react-icons/io';

const Links = ({ isLoggedIn }) => {
  return (
    <div className="links">
      <Link
        Icon={isLoggedIn ? IoLogOut : IoLogIn}
        text={isLoggedIn ? 'Logout' : 'Login'}
      />
      <Link Icon={HiGift} text="Suggest" />
      <Link Icon={TiMediaRewind} text="History" />
      <Link Icon={IoIosInformationCircle} text="About" />
    </div>
  );
};

export default Links;
