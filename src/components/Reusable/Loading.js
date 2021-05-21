/** @format */

import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';

function Loading({ children }) {
  const override = css`
    display: block;
    padding-right: 9vw;
    margin-top: 5vh;
  `;
  return (
    <div className='loading'>
      <h3>{children}</h3>
      <HashLoader size={120} color='#e62e50' css={override} />
    </div>
  );
}

export default Loading;
