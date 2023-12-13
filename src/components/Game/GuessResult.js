const GuessResult = ({ guesses }) => {
  return (
    <div className="guess-guesses">
      {guesses?.map(({value, id}) => (
        <p className="guess" key={id}>{value.toString()}</p>
      ))}
    </div>
  );
};

export default GuessResult;
