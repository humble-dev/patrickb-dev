import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { firestore } from "../firebase";
import Moment from "react-moment";
// import "moment-timezone";

const Block = props => {
  // const blockRef = firestore.doc(`blocks/${id}`);
  // const remove = () => blockRef.delete();
  const { blocks } = props;
  const user = useContext(UserContext);

  console.log("PROPS", props);
  console.log("PR BLOCKS", blocks);

  return (
    <div className="p-3 border rounded mb-3">
      {blocks.map(block => {
        console.log("MAP", block.type);
        console.log("MAPDAT", block.data);
        if (block.type === "header") {
          return <h2>{block.data.text}</h2>;
        }
        if (block.type === "paragraph") {
          return <p>{block.data.text}</p>;
        }
      })}
      {/* <p className="mb-2">{block}</p>
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="small text-muted">
          <Moment format="h:mma / ddd, MMM. D 'YY">{date}</Moment>
        </div>
        <div className="Buttons">
          {user ? (
            <span role="buton" className="icon-button-delete" onClick={remove}>
              <i className="far fa-trash-alt" />
            </span>
          ) : null}
        </div>
      </div> */}
    </div>
  );
};

export default Block;
