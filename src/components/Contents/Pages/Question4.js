import React, { Fragment, useState } from 'react';

function Question4({ changeOcassion, changeShow, changeProgress }) {
  const [radio, setRadio] = useState('0');
  changeProgress(50);

  const changeQuestion = choice => {
    changeOcassion(Number(choice));
    changeShow('question5');
  };

  const ocassions = ['Birthday', 'Holidays(Festivals, etc)'];
  return (
    <div className="question4">
      <h1 className="title-text">Perfect!</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is the ocassion?</h3>
          <div class="question-form">
            {ocassions.map((ocassion, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={e => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{ocassion}</label>
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

export default Question4;
