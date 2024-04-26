import axios from "axios";
import React, { useState } from "react";

import Results from "./Results";
import Synonyms from "./Synonyms";
import Gallery from "./Gallery";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [inputValue, setInputValue] = useState(props.default);
  const [result, setResult] = useState("");
  const [images, setImages] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let galleryApiKey = `8bc029ce07bb99a925obf42d966t543f`;
    let galleryApiUrl = `https://api.shecodes.io/images/v1/search?query=${inputValue}&key=${galleryApiKey}`;
    axios.get(galleryApiUrl).then(handleGalleryResponse);
  }

  function handleGalleryResponse(images) {
    setImages(images.data.photos);
  }

  function handleDictionaryResponse(response) {
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
          <h3>What word would you like to know more about?</h3>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search"
              defaultValue={props.default}
              onChange={handleInputValue}
            />
          </form>
          <div className="hint">
            Suggestion: nature, yoga, party, forest, sunset...
          </div>
        </header>
        <Results results={result} />
        <Synonyms synonyms={synonyms} />
        <Gallery image={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
