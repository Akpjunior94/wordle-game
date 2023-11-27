import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, statusOfGame }) {
  const [guessWord, setGuessWord] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (guessWord.length !== 5) {
      window.alert("Please enter exactly 5 characters. ");
      return;
    }
    handleSubmitGuess(guessWord);

    // reset the state
    setGuessWord("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlsfor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={statusOfGame !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guessWord}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuessWord(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
