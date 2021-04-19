import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Home from './Pages/Home';
import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Question3 from './Pages/Question3';
import Question4 from './Pages/Question4';
import Question5 from './Pages/Question5';
import Question6 from './Pages/Question6';
import Question7 from './Pages/Question7';
import Result from './Pages/Result';

const Content = ({ auth, show, changeShow }) => {
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState(0);
  const [relation, setRelation] = useState(0);
  const [ocassion, setOcassion] = useState(0);
  const [interest1, setInterest1] = useState(0);
  const [interest2, setInterest2] = useState(0);
  const [budget, setBudget] = useState(0);

  const [progress, setProgress] = useState(0);

  const changeAge = choice => {
    setAge(choice);
  };
  const changeGender = choice => {
    setGender(choice);
  };
  const changeRelation = choice => {
    setRelation(choice);
  };
  const changeOcassion = choice => {
    setOcassion(choice);
  };
  const changeInterest1 = choice => {
    setInterest1(choice);
  };
  const changeInterest2 = choice => {
    setInterest2(choice);
  };
  const changeBudget = choice => {
    setBudget(choice);
  };

  useEffect(() => {
    changeShow('home');
    // eslint-disable-next-line
  }, []);
  const changeProgress = value => {
    setProgress(value);
  };
  return (
    <Col className="content" md={8} lg={9} xl={9}>
      <div className="contents">
        {show === 'home' && (
          <Home
            auth={auth}
            changeShow={changeShow}
            changeProgress={changeProgress}
          />
        )}
        {show === 'question1' && (
          <Question1
            changeAge={changeAge}
            changeShow={changeShow}
            changeProgress={changeProgress}
          />
        )}
        {show === 'question2' && (
          <Question2
            changeGender={changeGender}
            changeShow={changeShow}
            changeProgress={changeProgress}
          />
        )}
        {show === 'question3' && (
          <Question3
            changeRelation={changeRelation}
            changeShow={changeShow}
            changeProgress={changeProgress}
            gender={gender}
          />
        )}
        {show === 'question4' && (
          <Question4
            changeOcassion={changeOcassion}
            changeShow={changeShow}
            changeProgress={changeProgress}
          />
        )}
        {show === 'question5' && (
          <Question5
            changeInterest1={changeInterest1}
            changeShow={changeShow}
            changeProgress={changeProgress}
            gender={gender}
          />
        )}
        {show === 'question6' && (
          <Question6
            changeInterest2={changeInterest2}
            changeShow={changeShow}
            changeProgress={changeProgress}
            interest1={interest1}
            gender={gender}
          />
        )}
        {show === 'question7' && (
          <Question7
            changeBudget={changeBudget}
            changeShow={changeShow}
            changeProgress={changeProgress}
          />
        )}
        {show === 'result' && (
          <Result
            age={age}
            gender={gender}
            relation={relation}
            ocassion={ocassion}
            interest1={interest1}
            interest2={interest2}
            budget={budget}
            changeShow={changeShow}
            changeProgress={changeProgress}
          />
        )}
        {progress !== 0 && progress !== 100 && <ProgressBar now={progress} />}
      </div>
    </Col>
  );
};

export default Content;
