/** @format */

import React, { Fragment, useState } from 'react';
import { interests2, indexes } from '../../Reusable/interests';

const Question6 = ({
  changeInterest2,
  changeShow,
  changeProgress,
  interest1,
  gender,
}) => {
  const [radio, setRadio] = useState('0');
  changeProgress(66.66);

  const changeQuestion = (choice) => {
    changeInterest2(Number(choice) + indexes[interest1]);
    changeShow('question7');
  };

  return (
    <div className='question3'>
      <h1 className='title-text'>Almost There!</h1>
      <div className='questions-card'>
        <div className='question'>
          <h3>What is {gender === 0 ? 'his' : 'her'} specific interest?</h3>
          <div class='question-form'>
            {
              <select
                value={radio}
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              >
                {interests2[interest1].map((interest, index) => {
                  return (
                    <Fragment>
                      <option value={index} key={index}>
                        {interest}
                      </option>
                    </Fragment>
                  );
                })}
              </select>
            }
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

export default Question6;
