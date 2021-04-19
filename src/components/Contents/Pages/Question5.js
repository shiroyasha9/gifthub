import React, { Fragment, useState } from 'react';

function Question5({ changeInterest1, changeShow, changeProgress, gender }) {
  const [radio, setRadio] = useState('0');
  changeProgress(62.5);

  const changeQuestion = choice => {
    changeInterest1(Number(choice));
    changeShow('question6');
  };

  const interests = ['Sports', 'Arts', 'Gaming', 'Music', 'Cooking', 'Reading'];
  return (
    <div className="question3">
      <h1 className="title-text">Great!</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is {gender === 0 ? 'his' : 'her'} primary interest?</h3>
          <div class="question-form">
            {interests.map((interest, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={e => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{interest}</label>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="question-btn">
          <div className="amaranth-btn" onClick={() => changeQuestion(radio)}>
            <button>
              <span>Proceed🎉</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question5;
