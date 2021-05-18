/** @format */

import React, { Fragment, useState } from 'react';
import { ages } from '../../Reusable/interests';

const Question1 = ({ changeAge, changeShow, changeProgress }) => {
  const [radio, setRadio] = useState('1');
  changeProgress(11.11);

  const changeQuestion = (choice) => {
    changeAge(Number(choice));
    changeShow('question2');
  };

  return (
    <div className='question1'>
      <h1 className='title-text'>Let's begin!</h1>
      <div className='question1-card'>
        <p>
          We will need some answers to use Machine Learning to suggest you a
          gift!
        </p>
        <div className='question'>
          <h3>What age group does this loved one belong to?</h3>
          <div className='question-form'>
            <select
              value={radio}
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            >
              {ages.map((interest, index) => {
                return (
                  <Fragment>
                    <option value={index} key={index}>
                      {interest}
                    </option>
                  </Fragment>
                );
              })}
            </select>
          </div>
        </div>
        <div className='question-btn'>
          <div className='amaranth-btn' onClick={() => changeQuestion(radio)}>
            <button>
              <span>Proceed🎉</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;
