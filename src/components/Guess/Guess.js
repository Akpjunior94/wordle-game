import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, index, answer }) {
  const checkedGuess = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${checkedGuess && checkedGuess[num].status}`}
        >
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
