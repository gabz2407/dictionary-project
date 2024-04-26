import React from "react";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (eachDefinition, index) {
        if ((eachDefinition.example, eachDefinition.definition)) {
          return (
            <div key={index}>
              <strong>Definition:</strong>
              <p>{eachDefinition.definition}</p>
              <p>
                <em>{eachDefinition.example}</em>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
