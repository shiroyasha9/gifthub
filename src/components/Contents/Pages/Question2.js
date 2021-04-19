import React, { Fragment, useState } from 'react';

function Question2({ changeGender, changeShow, changeProgress }) {
  const [radio, setRadio] = useState('0');
  changeProgress(25);

  const changeQuestion = choice => {
    changeGender(Number(choice));
    changeShow('question3');
  };

  const genders = ['Male', 'Female'];

  return (
    <div className="question2">
      <h1 className="title-text">Good!</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is this loved ones' gender?</h3>
          <div class="question-form">
            {genders.map((gender, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={e => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{gender}</label>
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

export default Question2;
