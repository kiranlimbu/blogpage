import { useGoogleLogin } from "react-google-login";

import "./login-style.css";
import { useState } from "react";

function CommentLogin({ getUsername, getUserEmail, successful }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  function onSuccess(googleUser) {
    setUserName(googleUser.getBasicProfile().getName());
    setUserEmail(googleUser.profileObj.email);
    successful();
  }

  function onFailure(error) {
    alert("failed to login");
  }

  // destructuring
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
  });

  if (userName) {
    getUsername(userName);
    getUserEmail(userEmail);
  }

  return (
    <div className="login-container" style={{ margin: "0px", padding: "40px" }}>
      <div className="login-container-header">
        <h1 className="login-title">Login</h1>
        <h3 style={{ marginTop: "10px", color: "#555", letterSpacing: "2px" }}>
          to post your comment
        </h3>
      </div>
      <div className="login-form">
        <button onClick={signIn} className="commentLoginButton">
          <img
            src={require("../Auth/google_logo.png")}
            style={{ width: "50px" }}
          />
          <span className="google-sign-text">Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default CommentLogin;
