import React from "react";

export default function Card({ id, heading, aboutText }) {
  return (
    <div className="circles" style={{ "--i": id }}>
      <h1 className="content heading">{heading}</h1>
      <button className="close--btn">+</button>
      <p className="content">{aboutText}</p>
    </div>
  );
}
