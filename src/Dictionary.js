import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(input) {
    setInputValue(input.target.value);
  }

  return (
    <div className="Dictionary">
      <header>
        <h1>Dictionary</h1>
        <h3>What word would you like to know more about?</h3>
        <form onSubmit={search}>
          <input type="search" placeholder="Search" onChange={handleSearch} />
        </form>
      </header>
      <Results results={result} />
    </div>
  );
}
