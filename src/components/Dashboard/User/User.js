import React, { useState } from 'react';
import Avatar from '../../../assets/222544.jpg';

const User = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <img src={Avatar} alt="avatar" className="user-img" />
      <h3>{isLogin ? 'Mubin' : 'Guest User'}</h3>
    </div>
  );
};

export default User;
