import React, { useState, useEffect } from "react";
import Loading from "../../Reusable/Loading";
import axios from "axios";
import firebase from "../../../firebase";

function Result({
  age,
  gender,
  relation,
  ocassion,
  interest1,
  interest2,
  budget,
  changeShow,
  changeProgress,
  user,
  name,
}) {
  changeProgress(100);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const userInput = [
    age,
    gender,
    relation,
    ocassion,
    interest1,
    interest2,
    budget,
  ];

  useEffect(() => {
    axios.post("/api", userInput).then((response) => {
      setTitle(response.data.output[0]);
      setData(response.data.output[1]);
      sendToFirebase(response.data.output[0]);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  const sendToFirebase = (title) => {
    if (user !== null) {
      const username = String(user.email).split("@")[0];
      const userRef = firebase.database().ref("Users/" + username);
      const recommendation = {
        name,
        age,
        gender,
        relation,
        ocassion,
        interest1,
        interest2,
        budget,
        title,
      };
      userRef.push(recommendation);
    }
  };

  if (loading) {
    return (
      <div className="result">
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <div className="result">
          <h1 className="title-text">
            For <span style={{ color: "#e62e50" }}>{name}</span> , We suggest,
          </h1>
          <div className="results">
            {title.split(",").length >= 2 ? (
              <h2>
                <span className="gifthub-text">{title.split(",")[0]} </span>
                <span className="gifthub-text result-text"> or</span>{" "}
                <span className="gifthub-text">{title.split(",")[1]}</span>
              </h2>
            ) : (
              <h2>
                <span className="gifthub-text"> {title.split(",")[0]}</span>
              </h2>
            )}
            <p className="result-p">Here are some of the matching products:</p>
            <div className="result-card">
              {data.map(
                ({ img, link, price, price_num, seller, title }, index) => {
                  return (
                    <div className="result-cards" key={index}>
                      <div className="result-cards-content">
                        <a href={link} target="_blank" rel="noreferrer">
                          {title.substring(0, 85)}
                        </a>
                        <p>
                          {price} {seller.includes("from") ? "" : "from "}
                          {seller}
                        </p>
                      </div>
                      <a href={link} target="_blank" rel="noreferrer">
                        <img src={img} alt={title} />
                      </a>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
