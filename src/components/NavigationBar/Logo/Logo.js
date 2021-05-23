/** @format */

import React from 'react';
import gifthubLogo from '../../../assets/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={gifthubLogo} alt='MyBurger' />
  </div>
);

export default logo;
