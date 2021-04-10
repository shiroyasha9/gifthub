import React from 'react';

const Aux = ({ className, children }) => {
  return (
    <section>
      <div className={className}>{children}</div>
    </section>
  );
};

export default Aux;
