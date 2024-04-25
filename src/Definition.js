import React from "react";

export default function Definition(props) {
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
          </div>
        );
      })}
    </div>
  );
}
