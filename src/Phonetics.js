import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics mb-2">
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
}
