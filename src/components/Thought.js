import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { firestore } from "../firebase";
import Moment from "react-moment";
// import "moment-timezone";

const Thought = ({ thought, date, id }) => {
  const thoughtRef = firestore.doc(`thoughts/${id}`);
  const remove = () => thoughtRef.delete();

  const user = useContext(UserContext);

  return (
    <div className="p-3 border rounded mb-3">
      <p className="mb-2">{thought}</p>
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="small text-muted">
          <Moment format="h:mma / ddd, MMM. D 'YY">{date}</Moment>
        </div>
        <div className="Buttons">
          {user ? (
            <span role="button" className="icon-button-delete" onClick={remove}>
              <i className="far fa-trash-alt" />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Thought;
