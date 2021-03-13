import React from "react";

const TopPage = (props) => {
  return (
    <div>
      <h1>Login Successfully</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default TopPage;
