import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tempGuess) => {
    const nextGuess = {
      value: tempGuess,
      id: `${tempGuess}-${Math.random()}`,
    };
    setGuesses([...guesses, nextGuess]);
    if (tempGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      {gameStatus}
      <GuessResult guesses={guesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" ? (
        <WonBanner numOfGuesses={guesses.length} />
      ) : (
        <LostBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
