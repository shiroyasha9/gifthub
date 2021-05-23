/** @format */

import React, { Fragment, useContext } from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../../Reusable/Backdrop';
import Links from '../../Dashboard/Links/Links';
import User from '../../Dashboard/User/User';

const SideDrawer = ({ open, closed, AppContext }) => {
  const { auth, user, firebase, changeShow } = useContext(AppContext);
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <User auth={auth} />
          <Links
            auth={auth}
            user={user}
            firebase={firebase}
            changeShow={changeShow}
            clicked={closed}
            mobile={true}
          />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
