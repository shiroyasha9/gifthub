import React, { Fragment, useState } from "react";
import { interests1 } from "../../Reusable/interests";

const Question5 = ({ changeInterest1, changeShow, changeProgress, gender }) => {
  const [radio, setRadio] = useState("0");
  changeProgress(55.55);

  const changeQuestion = (choice) => {
    changeInterest1(Number(choice));
    changeShow("question6");
  };

  return (
    <div className="question3">
      <h1 className="title-text">Great!</h1>
      <div className="questions-card">
        <div className="question">
          <h3>What is {gender === 0 ? "his" : "her"} primary interest?</h3>
          <div class="question-form">
            {interests1.map((interest, index) => {
              return (
                <Fragment>
                  <input
                    type="radio"
                    checked={Number(radio) === index}
                    value={index}
                    key={index}
                    onChange={(e) => setRadio(e.target.value)}
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
};

export default Question5;
