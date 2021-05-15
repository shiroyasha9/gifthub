import React from 'react';
const Link = ({ Icon, text }) => {
  return (
    <div className="link">
      <Icon
        size="4vh"
        style={{ marginBottom: '0.6rem' }}
        className="link-icon"
      />
      <h2>{text}</h2>
    </div>
  );
};

export default Link;
