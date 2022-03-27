import React from "react";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import "./Login.css";

const Loginpage = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  const changeEvent = () => {
    setHasAccount(!hasAccount);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg"> {emailError} </p>
        <label>Password</label>
        <input
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg "> {passwordError} </p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="btn" onClick={handleLogin}>
                Sign in
              </button>
              <p>
                Don't have an account?
                <span onClick={changeEvent}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button className="btn" onClick={handleSignup}>
                Sign up
              </button>
              <p>
                Have an account?
                <span onClick={changeEvent}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
