import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import Layout from "./layout/Index";
import Home from "./posts/Home-Page";
import Category from "./posts/Category-Page";
import Post from "./postDetail/Index";
import LoginPage from "./Auth/AuthorLogin-Page";
import ContactPage from "./contact/ContactPage";
import ForgotPassword from "./Auth/ForgotPass-Page";
import Dashboard from "./Author/Index";
import AuthProvider, { AuthContext } from "./features/provider";

import "./App.css";

function ProtectedRoute({ children, path }) {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  if (!authCtx.author) {
    history.push("/login");
    return "";
  }

  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />

            <Route path="/postDetail/:title" component={Post} />
            <Route path="/category/:category" component={Category} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/login/forgotPassword" component={ForgotPassword} />

            <ProtectedRoute exact path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
          </Layout>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
