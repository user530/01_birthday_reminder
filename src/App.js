import React from "react";
import data from "./data";
import List from "./List";

const App = () => {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button
          onClick={(e) => {
            console.log(e);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
