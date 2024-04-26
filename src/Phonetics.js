import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        🔊
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
