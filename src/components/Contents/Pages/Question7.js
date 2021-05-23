/** @format */

import React, { Fragment, useState } from 'react';
import { budgets } from '../../Reusable/interests';

const Question7 = ({ changeBudget, changeShow, changeProgress }) => {
  const [radio, setRadio] = useState('0');
  changeProgress(77.77);

  const changeQuestion = (choice) => {
    changeBudget(Number(choice));
    changeShow('question8');
  };

  return (
    <div className='question3'>
      <h1 className='title-text'>Lastly,</h1>
      <div className='questions-card'>
        <div className='question'>
          <h3>What is your budget?</h3>
          <div class='question-form question-7'>
            {budgets.map((budget, index) => {
              return (
                <div>
                  <input
                    type='radio'
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{budget}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className='question-btn'>
          <div className='amaranth-btn' onClick={() => changeQuestion(radio)}>
            <button>
              <span>Submit💖</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question7;
