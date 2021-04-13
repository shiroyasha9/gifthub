import React, { useState } from 'react';
import Avatar from '../../../assets/222544.jpg';

const User = ({ user }) => {
  return (
    <div className="user">
      <img src={Avatar} alt="avatar" className="user-img" />
      <h3 style={{ color: '#212529' }}>{user ? 'Mubin' : 'Guest User'}</h3>
    </div>
  );
};

export default User;
