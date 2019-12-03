import React, { Component, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

export const BlocksContext = createContext();

class BlocksProvider extends Component {
  state = {
    blocks: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("blocks")
      .onSnapshot(snapshot => {
        const blocks = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ blocks });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { blocks } = this.state;
    const { children } = this.props;

    console.log("BLOCKSPRO", blocks);

    return (
      <BlocksContext.Provider value={blocks}>{children}</BlocksContext.Provider>
    );
  }
}

export default BlocksProvider;
