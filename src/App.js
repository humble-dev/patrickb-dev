import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./assets/fontawesome/css/all.css";

import { ProtectedRoute } from "./components/ProtectedRoute";
import UserProvider from "./providers/UserProvider";
import ThoughtsProvider from "./providers/ThoughtsProvider";
import ScrollToTop from "./components/scrollToTop";

import Navbar from "./components/Navbar"; // eslint-disable-line no-use-before-define
import Footer from "./components/Footer";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProtectedPage from "./pages/Protected";
import AdminPage from "./pages/Admin";
import ThoughtStreamPage from "./pages/ThoughtStream";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThoughtsProvider>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            <ScrollToTop>
              <Navbar />
              <main>
                <div style={{ paddingTop: 57, paddingBottom: 67.2 }}>
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>

                    <Route path="/thoughts">
                      <ThoughtStreamPage />
                    </Route>

                    <ProtectedRoute
                      path="/protected"
                      component={ProtectedPage}
                    />

                    <ProtectedRoute path="/admin" component={AdminPage} />
                  </Switch>
                </div>
                <Footer />
              </main>
            </ScrollToTop>
          </Switch>
        </ThoughtsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
