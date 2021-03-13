import React from "react";
import "./LoginPage.css";
import Loading from "./Loading";

export default function TopPage(props) {
  return (
    <>
      {props.loading ? (
        <div className="login">
          <div className="row">
            <h1 className="title">Connection test</h1>
            <button className="btn" onClick={props.login}>
              Login with Google Account
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
