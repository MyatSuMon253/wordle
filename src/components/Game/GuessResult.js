import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "./Guess";

const GuessResult = ({ guesses, answer }) => {
  return (
    <div className="guess-guesses">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
};

export default GuessResult;
