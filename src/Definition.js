import React from "react";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3 className="text-capitalize mb-3 fw-semibold">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (eachDefinition, index) {
        if ((eachDefinition.example, eachDefinition.definition)) {
          return (
            <div key={index}>
              <strong>Definition</strong>
              <p>{eachDefinition.definition}</p>
              <p>
                <em className="example">{eachDefinition.example}</em>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
