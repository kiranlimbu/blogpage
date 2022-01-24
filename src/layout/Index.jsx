import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../features/provider";

import "./layout-style.css";
import { Menu } from "@material-ui/icons";

function MenuItem({ link, children, onClick }) {
  return (
    <li
      className="topbar-right-item"
      id={window.location.pathname === link ? "active" : ""}
    >
      <Link
        to={link}
        onClick={onClick}
        className="topbar-right-item global-link-style"
      >
        <div>{children}</div>
      </Link>
    </li>
  );
}

export default function Layout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [subscriber, setSubscriber] = useState("");
  const isSubDisabled = subscriber.length === 0;
  const { author, logout } = useContext(AuthContext);

  // subscribe button
  const onSubscribe = (e) => {
    e.preventDefault();
    console.log(subscriber);
    setSubscriber("");
  };

  const clearState = () => {
    logout();
  };

  return (
    <>
      <div className="main-container">
        <div className="header-wrapper">
          <header className="topbar-container">
            <div className="topbar-logo-wraper">
              <span className="topbar-left-logo" style={{ width: "230px" }}>
                <Link to="/" className="global-link-style">
                  <span className="logo-first">another</span>
                  <i className="logo-second">Topic</i>
                </Link>
              </span>
            </div>
            <nav>
              <ul className={`topbar-right-list ${toggleMenu ? "show" : ""}`}>
                <MenuItem link="/contact">Contact</MenuItem>
                {author ? (
                  <MenuItem link="/" onClick={clearState}>
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem link="/login">Login</MenuItem>
                )}
              </ul>

              <button
                className="nav-btn"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <Menu />
              </button>
            </nav>
          </header>
        </div>
        <div className="main-section">
          <div className="main-section-wrapper">
            <>{children}</>
          </div>
        </div>
        <footer className="footer-container">
          <div className="footer-wrapper">
            <div className="footer-content">
              <h2 className="footer-content-title">Subscribe to newsletter</h2>

              <form className="footer-content-subscribe">
                <input
                  className="footer-content-subscribe-items"
                  type="email"
                  required
                  value={subscriber}
                  placeholder="Email address"
                  onChange={(e) => setSubscriber(e.target.value)}
                />
                <button
                  className="footer-content-subscribe-items"
                  type="button"
                  disabled={isSubDisabled}
                  onClick={onSubscribe}
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="footer-trademark">
              &#169;{new Date().getFullYear()} anotherTopic
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
