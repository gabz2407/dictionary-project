import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0]) {
    return (
      <div className="Synonyms mb-4">
        <h3 className="p-2 fw-semibold">Synonyms</h3>
        <ul className="row mb-0">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="col-4 col-md-3 text-capitalize" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
