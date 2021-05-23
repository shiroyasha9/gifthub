/** @format */

import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../NavigationBar/Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo height='80%' />
  </header>
);
export default toolbar;
