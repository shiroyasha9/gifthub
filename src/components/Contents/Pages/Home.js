import React from 'react';

function Home({ auth, changeShow, changeProgress }) {
  changeProgress(0);
  return (
    <div className="home">
      <h1 className="title-text">
        Hey {auth.currentUser?.displayName.split(' ')[0] ?? 'Guest'},
      </h1>
      <div className="home-card">
        <h2>
          Welcome to <span className="gifthub-text"> GiftHub</span>
        </h2>
        <p>No idea what to gift your loved ones?</p>
        <p>Don't worry, GiftHub has got you covered.</p>
        <p className="home-p-text">
          Get Machine Learning based suggestions for what to gift your deared
          ones!
        </p>
        <div className="amaranth-btn" onClick={() => changeShow('question1')}>
          <button>
            <span>Get Started 😄</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
