import React, { Fragment, useState } from 'react';

function Question3({ changeRelation, changeShow, changeProgress, gender }) {
  const [radio, setRadio] = useState('0');
  changeProgress(37.5);

  const changeQuestion = choice => {
    changeRelation(Number(choice));
    changeShow('question4');
  };

  const relations = ['Family', 'Friend'];
  return (
    <div className="question3">
      <h1 className="title-text">Great!</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is your relation with {gender === 0 ? 'him' : 'her'}?</h3>
          <div class="question-form">
            {relations.map((relation, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={e => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{relation}</label>
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

export default Question3;
