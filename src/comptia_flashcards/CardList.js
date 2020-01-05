import React, { useContext } from "react";

import { FlashcardsContext } from "../providers/FlashcardProvider";

const CardList = () => {
  const cards = useContext(FlashcardsContext);

  return (
    <>
      <div className="mb-5 mt-3 text-center">
        <button className="btn btn-outline-primary btn-sm mr-2">
          Show All
        </button>
        <button className="btn btn-primary btn-sm mr-2">
          1 Troubleshooting
        </button>
        <button className="btn btn-primary btn-sm mr-2">2 Motherboards</button>
      </div>
      {cards.map(flashcard => (
        <div key={flashcard.id} className="card mb-4">
          <div className="card-body text-center">
            <p className="mb-3 lead text-info">{flashcard.question}</p>
            <p className="">{flashcard.answer}</p>
            <p
              className="small text-danger text-left font-weight-lighter mt-4 mb-0 text-muted"
              style={{ letterSpacing: 0.5, textTransform: "uppercase" }}
            >
              {flashcard.chapter}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardList;
