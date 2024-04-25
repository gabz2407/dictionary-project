import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  console.log(props.meaning);
  return (
    <div className="Definition">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (eachDefinition, index) {
        return (
          <div key={index}>
            <p>{eachDefinition.definition}</p>
            <p>
              <em>{eachDefinition.example}</em>
            </p>
            <div>
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
