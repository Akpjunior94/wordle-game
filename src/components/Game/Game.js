import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [statusOfGame, setStatusOfGame] = useState("running");

  const handleSubmitGuess = (guess) => {
    const updatedGuesses = [...guesses, guess];
    setGuesses(updatedGuesses);

    // check the game status afterwards
    if (guess.toUpperCase() === answer) {
      setStatusOfGame("won");
    } else if (updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatusOfGame("lost");
    }
  };
  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        answer={answer}
        statusOfGame={statusOfGame}
        guesses={guesses}
      />
      {statusOfGame !== "running" && (
        <Banner
          statusOfGame={statusOfGame}
          answer={answer}
          noOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
