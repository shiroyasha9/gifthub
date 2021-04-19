import React, { Fragment, useState } from 'react';

function Question7({ changeBudget, changeShow, changeProgress, gender }) {
  const [radio, setRadio] = useState('0');
  changeProgress(87.5);

  const changeQuestion = choice => {
    changeBudget(Number(choice));
    changeShow('result');
  };

  const budgets = ['Not that costly', 'Moderate', 'Can be expensive!'];

  return (
    <div className="question3">
      <h1 className="title-text">Lastly,</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is your budget?</h3>
          <div class="question-form">
            {budgets.map((budget, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={e => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{budget}</label>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="question-btn">
          <div className="amaranth-btn" onClick={() => changeQuestion(radio)}>
            <button>
              <span>Submit💖</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question7;
