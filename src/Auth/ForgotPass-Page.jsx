import { useState } from "react";
import { Link } from "react-router-dom";

import "./login-style.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  // submit function (fetch action)
  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email: email,
    };
    console.log(userInfo);
  };

  return (
    <div className="login-container">
      <div className="login-container-header">
        <h3
          style={{ marginBottom: "5px", color: "#555", letterSpacing: "2px" }}
        >
          Let's
        </h3>
        <h1>Reset Your Password</h1>
      </div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label>Enter your email address:</label>
          <input
            className="global-input"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
