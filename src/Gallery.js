import React from "react";

import "./Gallery.css";

export default function Gallery(props) {
  if (props.image) {
    return (
      <section className="Gallery row mt-0 pt-4 ps-2 pe-2">
        {props.image.map(function (photo, index) {
          return (
            <div className="col-6 col-md-4 mb-4" key={index}>
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
