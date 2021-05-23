/** @format */

import React, { useState } from 'react';
import Toolbar from '../components/NavigationBar/Toolbar/Toolbar';
import SideDrawer from '../components/NavigationBar/SideDrawer/SideDrawer';
import { Fragment } from 'react';

const Layout = ({ AppContext }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return !prevState;
    });
  };

  return (
    <Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        AppContext={AppContext}
      />
    </Fragment>
  );
};

export default Layout;
