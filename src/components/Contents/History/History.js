/** @format */

import React, { useEffect, useState } from 'react';
import firebase from '../../../firebase';
import Loading from '../../Reusable/Loading';
import {
  ages,
  relations,
  interests1,
  interests2,
  indexes,
} from '../../Reusable/interests';
import { MdClose } from 'react-icons/md';

const History = ({
  user,
  changeShow,
  changeProgress,
  changeAge,
  changeGender,
  changeRelation,
  changeOcassion,
  changeInterest1,
  changeInterest2,
  changeBudget,
  changeName,
  changeSaveToFirebase,
}) => {
  changeProgress(0);
  const [historyList, setHistoryList] = useState([]);
  const [fetchedHistory, setFetchedHistory] = useState(false);
  useEffect(() => {
    if (user !== null) {
      const username = String(user.email).split('@')[0];
      const userRef = firebase.database().ref('Users/' + username);
      userRef.on('value', (snapshot) => {
        try {
          const histories = snapshot.val();
          const history = [];
          for (let id in histories) {
            history.push({ id, ...histories[id] });
          }
          setHistoryList(history.reverse());
          setFetchedHistory(true);
          console.log(history);
        } catch (error) {
          setFetchedHistory('error');
          console.log('Error');
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  const deleteHistory = (event, id) => {
    event.stopPropagation();
    const username = String(user.email).split('@')[0];
    const historyRef = firebase
      .database()
      .ref('Users/' + username)
      .child(id);
    historyRef.remove();
  };

  const showLinks = (
    age,
    gender,
    relation,
    ocassion,
    interest1,
    interest2,
    budget,
    name
  ) => {
    changeAge(age);
    changeGender(gender);
    changeRelation(relation);
    changeOcassion(ocassion);
    changeInterest1(interest1);
    changeInterest2(interest2);
    changeBudget(budget);
    changeName(name);
    changeSaveToFirebase(false);
    changeShow('result');
  };

  return (
    <div className='history-card'>
      {fetchedHistory === false ? (
        <Loading>Getting your History...</Loading>
      ) : (
        ''
      )}
      {fetchedHistory === true ? (
        historyList.length === 0 ? (
          <h2 className='title-text'>No History Yet!</h2>
        ) : (
          historyList.map((history) => {
            const {
              name,
              age,
              gender,
              relation,
              ocassion,
              title,
              interest1,
              interest2,
              budget,
              id,
            } = history;
            return (
              <div
                className='history-cards'
                key={id}
                onClick={() =>
                  showLinks(
                    age,
                    gender,
                    relation,
                    ocassion,
                    interest1,
                    interest2,
                    budget,
                    name
                  )
                }
              >
                <MdClose
                  className='close-btn'
                  size='2.5vh'
                  onClick={(event) => deleteHistory(event, id)}
                />
                <div className='history-card-content'>
                  <h3>
                    <span className='gifthub-text'>For {name},</span>
                  </h3>
                  <p>
                    We Recommend:{' '}
                    <span style={{ color: 'var(--violet)', fontWeight: '700' }}>
                      {title}
                    </span>
                  </p>
                  <p>
                    {gender === 0 ? 'He ' : 'She '}
                    is your {ages[age]} old {relations[relation]}, and{' '}
                    {gender === 0 ? 'his ' : 'her '}
                    interests are:{' '}
                    <span style={{ color: '#e62e50' }}>
                      {interests1[interest1]}
                    </span>{' '}
                    and{' '}
                    <span style={{ color: '#e62e50' }}>
                      {interests2[interest1][interest2 - indexes[interest1]]}
                    </span>
                  </p>
                </div>
              </div>
            );
          })
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default History;
