import React, { useEffect, useState } from "react";
import fire from "./fire";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import Hero from "./Hero";
import "firebase/auth";
import "firebase/messaging";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/Invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            setEmailError("Email not found");
            setPassword("Password Incorrect");
        }
      });
    setPassword("");
    setEmail("");
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/Invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            setEmailError("Invalid Email");
            setPassword("Weak Password");
        }
      });
    setPassword("");
    setEmail("");
  };

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("signout successful");
      })
      .catch(function (error) {
        console.log("an error occured");
      });
  };

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };

    authListener();
  }, []);

  return (
    <div className="loginComponent">
      {user ? (
        <div>
          <Hero handleLogout={handleLogout} />
          <Homepage />
        </div>
      ) : (
        <LoginPage
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default Login;
