import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';
import axios from 'axios';

function Result({
  age,
  gender,
  relation,
  ocassion,
  interest1,
  interest2,
  budget,
  changeShow,
  changeProgress,
}) {
  changeProgress(100);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const userInput = [
    age,
    gender,
    relation,
    ocassion,
    interest1,
    interest2,
    budget,
  ];
  useEffect(() => {
    axios.post('/api', userInput).then(response => setData(response.data));
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const override = css`
    display: block;
    padding-right: 9vw;
  `;
  if (loading) {
    return (
      <div className="result">
        <div className="result-loading">
          <h3>Getting your ML based suggestions...</h3>
          <PacmanLoader size={60} color="#e62e50" css={override} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="result">
          <div className="questions-card">
            <div className="question">
              <h3>We suggest</h3>
              {console.log(data)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
