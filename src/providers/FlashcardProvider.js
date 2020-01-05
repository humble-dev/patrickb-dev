import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

export const FlashcardsContext = createContext();

class FlashcardsProvider extends Component {
  state = {
    flashcards: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("comptia_flashcards")
      .orderBy("chapter", "asc")
      .onSnapshot(snapshot => {
        const flashcards = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ flashcards });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { flashcards } = this.state;
    const { children } = this.props;

    console.log("FlashcardsPRO", flashcards);

    return (
      <FlashcardsContext.Provider value={flashcards}>
        {children}
      </FlashcardsContext.Provider>
    );
  }
}

export default FlashcardsProvider;
