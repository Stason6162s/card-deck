import React from "react";
import Deck from "./components/Deck";
import List from "./components/List";

export default function App() {
  return (
    <div className="App">
      <List />
      <Deck count={7} contenPerPage={3} />
    </div>
  );
}
