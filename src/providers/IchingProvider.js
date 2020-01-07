import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

export const IchingContext = createContext();

class IchingProvider extends Component {
  state = { ichingQueries: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("iching_queries")
      .orderBy("datetime", "desc")
      .onSnapshot(snapshot => {
        const ichingQueries = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ ichingQueries });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { ichingQueries } = this.state;
    const { children } = this.props;

    console.log("IchingQue", ichingQueries);

    return (
      <IchingContext.Provider value={ichingQueries}>
        {children}
      </IchingContext.Provider>
    );
  }
}

export default IchingProvider;
