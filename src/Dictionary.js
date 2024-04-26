import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";
import Synonyms from "./Synonyms";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [inputValue, setInputValue] = useState(props.default);
  const [result, setResult] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    let result = response.data[0];
    setResult(result);
    setSynonyms(result.meanings[0].synonyms);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleInputValue(input) {
    setInputValue(input.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1 className="fs-2 pt-2">Dictionary</h1>
          <h3 className="subtitle">
            What word would you like to know more about?
          </h3>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search"
              onChange={handleInputValue}
            />
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
  } else {
    load();
    return "Loading";
  }
}
