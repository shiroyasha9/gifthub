/** @format */

import React, { useState } from 'react';

function Question8({
  changeName,
  changeShow,
  changeProgress,
  gender,
  changeSaveToFirebase,
}) {
  const [name, setName] = useState('Loved One');
  changeProgress(88.88);

  const changeQuestion = (choice) => {
    changeName(choice);
    changeSaveToFirebase(true);
    changeShow('result');
  };

  return (
    <div className='question3'>
      <h1 className='title-text'>Optional,</h1>
      <div className='questions-card'>
        <div className='question'>
          <h3>What is {gender === 0 ? 'his' : 'her'} name?</h3>
          <div class='question-form'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='question-btn'>
          <div className='amaranth-btn' onClick={() => changeQuestion(name)}>
            <button>
              <span>Submit💖</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question8;
