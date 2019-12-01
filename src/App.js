import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import { ProtectedRoute } from "./components/ProtectedRoute";
import UserProvider from "./providers/UserProvider";
import ScrollToTop from "./components/scrollToTop";

import Navbar from "./components/Navbar"; // eslint-disable-line no-use-before-define
import Footer from "./components/Footer";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProtectedPage from "./pages/Protected";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <ScrollToTop>
            <Navbar />
            <div style={{ paddingTop: 57 }}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <ProtectedRoute path="/protected" component={ProtectedPage} />
              </Switch>
            </div>
            <Footer />
          </ScrollToTop>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
