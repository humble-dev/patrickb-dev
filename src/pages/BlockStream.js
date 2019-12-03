import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

import AddBlock from "../components/AddBlock";
import Block from "../components/Block";

import { BlocksContext } from "../providers/BlocksProvider";

const BlockStreamPage = () => {
  const user = useContext(UserContext);
  const blocksList = useContext(BlocksContext);

  console.log("Rendered list", blocksList);

  return (
    <section className="container py-5">
      {user ? (
        <div className="mx-auto">
          <AddBlock />
        </div>
      ) : null}

      <div className="mx-auto mt-5">
        {blocksList.map(block => (
          <Block {...block} key={block.id} />
        ))}
      </div>
    </section>
  );
};

export default BlockStreamPage;
