import React, { useState } from "react";
import ReactConfetti from "react-confetti";
import laineysData from "./laineysData";
import "./styles.css";
import Card from "./Card";

function App() {
  const [mainCircle, setMainCircle] = useState(true);
  const [fullCard, setFullCard] = useState(true);

  function hide() {
    setMainCircle(false);
    const Circle = document.querySelectorAll(".circles");
    Circle.forEach((card) => {
      card.classList.add("cards");
    });
  }

  const Cards = document.querySelectorAll(".circles");
  Cards.forEach((card) => {
    card.onclick = () => {
      if (fullCard) {
        card.classList.add("full--cards");
      } else {
        card.classList.remove("full--cards");
      }
      setFullCard(true);
    };
  });

  const CloseButton = document.querySelectorAll(".close--btn");
  CloseButton.forEach((btn) => {
    btn.onclick = () => {
      setFullCard(false);
    };
  });

  const cardsComponent = laineysData.map((card) => {
    return (
      <Card
        key={card.id}
        heading={card.heading}
        aboutText={card.aboutText}
        id={card.id}
      />
    );
  });

  return (
    <div className="App">
      {mainCircle && <ReactConfetti style={{ zIndex: 100 }} />}
      {mainCircle && (
        <div className="main--circle" onClick={hide}>
          <h1>Happy Birthday</h1>
          <h1>Lainey 🖤</h1>
          <p className="clkme">Click Me</p>
        </div>
      )}
      <div className="container">{cardsComponent}</div>
    </div>
  );
}

export default App;
