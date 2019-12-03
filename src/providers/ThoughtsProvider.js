import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

export const ThoughtsContext = createContext();

class ThoughtsProvider extends Component {
  state = { thoughts: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("thoughts")
      .orderBy("date", "desc")
      .onSnapshot(snapshot => {
        const thoughts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ thoughts });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { thoughts } = this.state;
    const { children } = this.props;

    // console.log("rendered ThoPro", thoughts);

    return (
      <ThoughtsContext.Provider value={thoughts}>
        {children}
      </ThoughtsContext.Provider>
    );
  }
}

export default ThoughtsProvider;
