/** @format */

import React from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../Reusable/Backdrop';
import { Fragment } from 'react';
import Links from '../Dashboard/Links/Links';

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <Fragment>
      <div>
        <Backdrop show={open} clicked={closed} />
      </div>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>{/* <Logo /> */}</div>
        <nav>
          <Links />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
