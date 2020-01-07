import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./assets/fontawesome/css/all.css";
import { Scrollbars } from "react-custom-scrollbars";

import { ProtectedRoute } from "./components/ProtectedRoute";
import UserProvider from "./providers/UserProvider";
import ThoughtsProvider from "./providers/ThoughtsProvider";
import BlocksProvider from "./providers/BlocksProvider";
import ScrollToTop from "./components/scrollToTop";
import FlashcardsProvider from "./providers/FlashcardProvider";
import IchingProvider from "./providers/IchingProvider";

import Navbar from "./components/Navbar"; // eslint-disable-line no-use-before-define
import Footer from "./components/Footer";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProtectedPage from "./pages/Protected";
import AdminPage from "./pages/Admin";
import ThoughtStreamPage from "./pages/ThoughtStream";
import BlockStream from "./pages/BlockStream";
import ExperimentView from "./pages/Experiment.View";

import RusticRentals from "./pages/farmtables/RusticRentals";

import FlashcardPage from "./comptia_flashcards/FlashcardPage";
// import CardList from "./comptia_flashcards/CardList";

import IchingPage from "./iching/iching.page";
import Blank from "./iching/blank";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <BlocksProvider>
          <ThoughtsProvider>
            <Switch>
              <Route path="/rusticrentals" component={RusticRentals} />
              <Route path="/experiments" component={ExperimentView} />

              <Route path="/login">
                <LoginPage />
              </Route>

              <Route path="/blank">
                <Blank />
              </Route>

              <ScrollToTop>
                <main>
                  <Scrollbars style={{ height: "100vh" }}>
                    <Navbar />

                    <div id="content">
                      <Switch>
                        <Route exact path="/">
                          <HomePage />
                        </Route>

                        <Route path="/flashcards">
                          <FlashcardsProvider>
                            <FlashcardPage />
                          </FlashcardsProvider>
                        </Route>

                        <IchingProvider>
                          <ProtectedRoute
                            path="/iching"
                            component={IchingPage}
                          />
                        </IchingProvider>

                        <Route path="/blocks">
                          <BlockStream />
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
                  </Scrollbars>
                </main>
              </ScrollToTop>
            </Switch>
          </ThoughtsProvider>
        </BlocksProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
