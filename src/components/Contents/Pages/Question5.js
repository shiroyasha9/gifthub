/** @format */

import React, { Fragment, useState } from 'react';
import { interests1 } from '../../Reusable/interests';

const Question5 = ({ changeInterest1, changeShow, changeProgress, gender }) => {
  const [radio, setRadio] = useState('0');
  changeProgress(55.55);

  const changeQuestion = (choice) => {
    changeInterest1(Number(choice));
    changeShow('question6');
  };

  return (
    <div className='question3'>
      <h1 className='title-text'>Great!</h1>
      <div className='questions-card'>
        <div className='question'>
          <h3>What is {gender === 0 ? 'his' : 'her'} primary interest?</h3>
          <div class='question-form'>
            <select
              value={radio}
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            >
              {interests1.map((interest, index) => {
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

export default Question5;
