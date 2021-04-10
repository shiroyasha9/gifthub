import React from 'react';
const Link = ({ Icon, text }) => {
  return (
    <div className="link">
      <Icon size={40} color="#FF5D8F" style={{ marginBottom: '0.6rem' }} />
      <h2>{text}</h2>
    </div>
  );
};

export default Link;
