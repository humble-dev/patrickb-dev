import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

import AddThought from "../components/AddThought";
import Thought from "../components/Thought";

import { ThoughtsContext } from "../providers/ThoughtsProvider";

const ThoughtStreamPage = () => {
  const user = useContext(UserContext);
  const thoughts = useContext(ThoughtsContext);

  console.log("Rendered ThoStre", thoughts);

  return (
    <section className="container py-5">
      {user ? (
        <div className="mx-auto" style={{ maxWidth: 480 }}>
          <AddThought />
        </div>
      ) : null}

      <div className="mx-auto mt-5" style={{ maxWidth: 480 }}>
        {thoughts.map(thought => (
          <Thought {...thought} key={thought.id} />
        ))}
      </div>
    </section>
  );
};

export default ThoughtStreamPage;
