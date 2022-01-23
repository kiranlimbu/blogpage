import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../features/provider";

import "./login-style.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  // submit function (fetch action)
  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName: "Kiran",
      lastName: "Limbu",
      email: "kiran@awesome.com",
    };
    if (username === "mrlimbu" && password === "1234") {
      authCtx.login(userInfo);
      history.push("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-container-header">
        <h1 className="login-title">Login</h1>
        <h3 style={{ marginTop: "10px", color: "#555", letterSpacing: "2px" }}>
          to post and edit articles
        </h3>
      </div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input
            className="global-input"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="global-input"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <Link to="/login/forgotPassword" className="login-passRecover">
        Forgot password?
      </Link>
    </div>
  );
}

export default LoginPage;
