import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";
import Synonyms from "./Synonyms";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  function handleResponse(response) {
    let result = response.data[0];
    setResult(result);
    setSynonyms(result.meanings[0].synonyms);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(input) {
    setInputValue(input.target.value);
  }

  return (
    <div className="Dictionary">
      <header>
        <h1 className="fs-2 pt-2">Dictionary</h1>
        <h3 className="fs-5 ">What word would you like to know more about?</h3>
        <form onSubmit={search}>
          <input type="search" placeholder="Search" onChange={handleSearch} />
        </form>
        <div className="hint">
          Suggestion: flowers, yoga, party, forest, sunset...
        </div>
      </header>
      <div>
        <Results results={result} />
      </div>
      <div>
        <Synonyms synonyms={synonyms} />
      </div>
    </div>
  );
}
