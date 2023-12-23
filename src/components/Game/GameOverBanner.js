import React from "react";

const GameOverBanner = ({ gameStatus, numOfGuesses , answer}) => {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>congratulations</strong>Got it in <strong>{numOfGuesses} guesses</strong>
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </div>;
  }
};

export default GameOverBanner;
