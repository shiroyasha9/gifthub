/** @format */

import React, { useState, useEffect } from 'react';
import Loading from '../../Reusable/Loading';
import DSAlert from '../../Reusable/DSAlert';
import axios from 'axios';
import firebase from '../../../firebase';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

// const headers = {};

const Result = ({
  age,
  gender,
  relation,
  ocassion,
  interest1,
  interest2,
  budget,
  changeShow,
  changeProgress,
  user,
  name,
  saveToFirebase,
}) => {
  changeProgress(100);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState([]);
  const [title, setTitle] = useState('');
  const [sentToFirebase, setSentToFirebase] = useState(false);

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
    axios.post('http://127.0.0.1:5000/api', userInput).then((response) => {
      console.log(response.data);
      setTitle(response.data.output[0]);
      setData(response.data.output[1]);
      console.log(response.data.output[1]);
      if (saveToFirebase) {
        sendToFirebase(response.data.output[0]);
      }
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  const sendToFirebase = (title) => {
    if (user !== null) {
      const username = String(user.email).split('@')[0];
      const userRef = firebase.database().ref('Users/' + username);
      const recommendation = {
        name,
        age,
        gender,
        relation,
        ocassion,
        interest1,
        interest2,
        budget,
        title,
      };
      userRef.push(recommendation);
      setSentToFirebase(true);
    }
  };

  if (loading) {
    return (
      <div className='result'>
        <Loading>Getting your ML based suggestions...</Loading>
      </div>
    );
  } else {
    return (
      <div>
        <div className='result'>
          <h1 className='title-text'>
            For <span style={{ color: '#e62e50' }}>{name}</span> , We suggest,
          </h1>
          <div className='results'>
            {title.split(',').length >= 2 ? (
              <h2>
                <span className='gifthub-text'>{title.split(',')[0]} </span>
                <span className='gifthub-text result-text'> or</span>{' '}
                <span className='gifthub-text'>{title.split(',')[1]}</span>
              </h2>
            ) : (
              <h2>
                <span className='gifthub-text'> {title.split(',')[0]}</span>
              </h2>
            )}
            <p className='result-p'>Here are some of the matching products:</p>
            <div className='result-card'>
              {sentToFirebase ? (
                <DSAlert changeShow={changeShow} link='history'>
                  Saved to History.{' '}
                </DSAlert>
              ) : (
                ''
              )}
              {data.map(
                ({ img, link, price, price_num, seller, title }, index) => {
                  return (
                    <div className='result-cards' key={index}>
                      <div className='result-cards-content'>
                        <a href={link} target='_blank' rel='noreferrer'>
                          {title.substring(0, 85)}
                        </a>
                        <p>
                          {price} {seller.includes('from') ? '' : 'from '}
                          {seller}
                        </p>
                      </div>
                      <a href={link} target='_blank' rel='noreferrer'>
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
};

export default Result;
