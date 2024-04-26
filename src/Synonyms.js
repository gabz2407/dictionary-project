import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0]) {
    return (
      <div className="Synonyms">
        <h3 className="p-2 fw-semibold">Synonyms</h3>
        <ul className="row ">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="col-3 col-lg-2 text-capitalize" key={index}>
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
