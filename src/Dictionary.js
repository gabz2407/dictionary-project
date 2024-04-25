import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [inputValue, setInputValue] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${inputValue} `);
  }

  function handleSearch(input) {
    setInputValue(input.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h3>What word would you like to know more about?</h3>
      <form onSubmit={search}>
        <input type="search" placeholder="Search" onChange={handleSearch} />
      </form>
    </div>
  );
}
