import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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

function ProtectedRoute({ children, exact = false, path }) {
  const authCtx = useContext(AuthContext);

  if (!authCtx.author)
    return <Route exact path="/login" component={LoginPage} />;

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
