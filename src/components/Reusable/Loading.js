import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

function Loading() {
  const override = css`
    display: block;
    padding-right: 9vw;
  `;
  return (
    <div className="loading">
      <h3>Getting your ML based suggestions...</h3>
      <PacmanLoader size={60} color="#e62e50" css={override} />
    </div>
  );
}

export default Loading;
