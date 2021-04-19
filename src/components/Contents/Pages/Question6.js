import React, { Fragment, useState } from 'react';

function Question6({
  changeInterest2,
  changeShow,
  changeProgress,
  interest1,
  gender,
}) {
  const [radio, setRadio] = useState('0');
  changeProgress(75);

  const interests = [
    [
      'Football',
      'Basketball',
      'Hockey',
      'Cricket',
      'Badminton',
      'Athletics',
      'Tennis',
      'Indoor',
      'Volleyball',
      'Boxing',
      'Skating',
      'Rugby',
      'Cycling',
      'Fishing',
    ],
    ['Painting', 'Spray Painting', 'Doodle'],
    ['PC', 'Console', 'Mobile'],
    ['Classical', 'Western', 'Electronic'],
    ['Baking', 'Utilities', 'General'],
    ['Horror', 'Sci-fi', 'Non fiction', 'Drama/Thriller'],
  ];

  const indexes = [0, 14, 17, 20, 23, 26];

  const changeQuestion = choice => {
    changeInterest2(Number(choice) + indexes[interest1]);
    changeShow('question7');
  };

  return (
    <div className="question3">
      <h1 className="title-text">Almost There!</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is {gender === 0 ? 'his' : 'her'} specific interest?</h3>
          <div class="question-form">
            {interest1 !== 0 ? (
              interests[interest1].map((interest, index) => {
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
              })
            ) : (
              <select
                value={radio}
                onChange={e => {
                  setRadio(e.target.value);
                }}
              >
                {interests[0].map((interest, index) => {
                  return (
                    <Fragment>
                      <option value={index} key={index}>
                        {interest}
                      </option>
                    </Fragment>
                  );
                })}
              </select>
            )}
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

export default Question6;
