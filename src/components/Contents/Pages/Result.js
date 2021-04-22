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
  const [title, setTitle] = useState('');

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
    axios.post('/api', userInput).then(response => {
      setTitle(response.data.output[0]);
      setData(response.data.output[1]);
    });
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
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
          <h1 className="title-text">We suggest,</h1>
          <div className="results">
            {title.split(',').length >= 2 ? (
              <h2>
                <span className="gifthub-text">{title.split(',')[0]} </span>
                <span className="gifthub-text result-text"> or</span>{' '}
                <span className="gifthub-text">{title.split(',')[1]}</span>
              </h2>
            ) : (
              <h2>
                <span className="gifthub-text"> {title.split(',')[0]}</span>
              </h2>
            )}
            <p className="result-p">Here are some of the matching products:</p>
            <div className="result-card">
              {data.map(
                ({ img, link, price, price_num, seller, title }, index) => {
                  return (
                    <div className="result-cards" key={index}>
                      <div className="result-cards-content">
                        <a href={link} target="_blank" rel="noreferrer">
                          {title.substring(0, 85)}
                        </a>
                        <p>
                          {price} {seller.includes('from') ? '' : 'from '}
                          {seller}
                        </p>
                      </div>
                      <a href={link} target="_blank" rel="noreferrer">
                        <img src={img} alt={title} />
                      </a>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
