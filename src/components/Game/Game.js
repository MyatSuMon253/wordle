import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
import { useState } from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (tempGuess) => {
    const nextGuess = {
      value: tempGuess,
      id: `${ tempGuess}-${Math.random()}`
    }
    setGuesses([...guesses, nextGuess]);
  }
  
  return (
    <>
      <GuessResult guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess}  />
    </>
  );
}

export default Game;
