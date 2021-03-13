import React, { useState, useEffect, createContext } from "react";
import firebase from "./firebase/firebase";
import "./App.css";
import LoginPage from "./components/LoginPage";
import TopPage from "./components/TopPage";

const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(true);
    });
  }, []);

  const loginHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const logoutHandler = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      {user ? (
        <AuthContext.Provider value={user.uid}>
          <TopPage logout={logoutHandler} />
        </AuthContext.Provider>
      ) : (
        <LoginPage login={loginHandler} loading={loading} />
      )}
    </div>
  );
}

export { App, AuthContext };
