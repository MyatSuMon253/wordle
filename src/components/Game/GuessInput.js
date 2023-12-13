import { useState } from "react";

const GuessInput = () => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('please enter exactly 5 characters!')
      return
    }
    console.info({guess: guess})
    setGuess("");
  };

  const transformToUpper = (event) => {
    const input = event.target.value
    const uppertext = input.toUpperCase();
    setGuess(uppertext);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={transformToUpper}
        min={5}
        max={5}
        required
      />
    </form>
  );
};

export default GuessInput;
