import React from "react";

import CardList from "./CardList";
import AddCard from "./AddCard";

const FlashcardPage = () => (
  <>
    <header className="bg-light text-center py-5">
      <h1 className="mb-0">Flashcards</h1>
    </header>
    <section className="container-fluid my-5">
      <AddCard />
    </section>
    <div className="w-100 bg-light py-5">
      <section className="container">
        <CardList />
      </section>
    </div>
  </>
);

export default FlashcardPage;
