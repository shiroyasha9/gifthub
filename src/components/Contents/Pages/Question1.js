import React, { Fragment, useState } from "react";
import { ages } from "../../Reusable/interests";

const Question1 = ({ changeAge, changeShow, changeProgress }) => {
  const [radio, setRadio] = useState("1");
  changeProgress(11.11);

  const changeQuestion = (choice) => {
    changeAge(Number(choice));
    changeShow("question2");
  };

  return (
    <div className="question1">
      <h1 className="title-text">Let's begin!</h1>
      <div className="question1-card">
        <p>
          We will need some answers to use Machine Learning to suggest you a
          gift!
        </p>
        <div className="question">
          <h3>What age group does this loved one belong to?</h3>
          <div className="question-form">
            {ages.map((age, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                  <label onClick={() => setRadio(index)}>{age}</label>
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
};

export default Question1;
