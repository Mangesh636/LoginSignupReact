import "./LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user_icon" />
          <input type="text" placeholder="Enter username" />
        </div>
        {action === "Log In" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={email_icon} alt="email_icon" />
            <input type="email" placeholder="Enter email address" />
          </div>
        )}
        <div className="input">
          <img src={password_icon} alt="password_icon" />
          <input type="password" placeholder="Enter password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Log In" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Log In");
          }}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
