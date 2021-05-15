import React from "react";
import Guest from "../../../assets/guest.jpg";

const User = ({ auth }) => {
  return (
    <div className="user">
      <img
        src={auth.currentUser?.photoURL ?? Guest}
        alt="avatar"
        className="user-img"
      />
      <h3 style={{ color: "#212529", fontSize: "2vh" }}>
        {auth.currentUser?.displayName ?? "Guest User"}
      </h3>
    </div>
  );
};

export default User;
