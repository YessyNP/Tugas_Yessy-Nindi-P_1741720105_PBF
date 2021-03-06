import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import * as firebase from "firebase";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  
  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setErrors(e.message);
      });
  };

  const handleGoogleSignUp = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            console.log(result);
            Auth.setLoggedIn(true);
          })
          .catch((e) => setErrors(e.message));
      });
  };

  return (
    <div>
      <h1>Join</h1>

      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />

        <hr />

        <button
          onClick={() => handleGoogleSignUp()}
          className="googleBtn"
          type="button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join with Google
        </button>

        <button type="submit">Sign up</button>

        <span>{error}</span>
      </form>
    </div>
  );
};

export default Join;
