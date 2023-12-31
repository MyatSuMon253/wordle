import { useState } from "react";

const GuessInput = ({gameStatus, handleSubmitGuess}) => {
  const [tempGuess, setTempGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tempGuess.length !== 5) {
      window.alert("please enter exactly 5 characters!");
      return;
    }
    
    handleSubmitGuess(tempGuess)
    setTempGuess("");
  };

  const transformToUpper = (event) => {
    const input = event.target.value;
    const uppertext = input.toUpperCase();
    setTempGuess(uppertext);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== 'running'}
        value={tempGuess}
        onChange={transformToUpper}
        min={5}
        max={5}
        required
      />
    </form>
  );
};

export default GuessInput;
