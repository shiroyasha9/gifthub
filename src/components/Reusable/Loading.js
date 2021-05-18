/** @format */

import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { css } from '@emotion/core';

function Loading({ children }) {
  const override = css`
    display: block;
    padding-right: 9vw;
  `;
  return (
    <div className='loading'>
      <h3>{children}</h3>
      <PacmanLoader size={60} color='#e62e50' css={override} />
    </div>
  );
}

export default Loading;
