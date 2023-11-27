import React from "react";

const Success = ({ noOfGuesses }) => {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {` ${noOfGuesses}`}
          {` ${noOfGuesses > 1 ? "guesses" : "guess"}`}
        </strong>
        .
      </p>
    </div>
  );
};

const Failure = ({ answer }) => {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};

function Banner({ statusOfGame, answer, noOfGuesses }) {
  return (
    <>
      {statusOfGame === "won" ? (
        <Success noOfGuesses={noOfGuesses} />
      ) : (
        <Failure answer={answer} />
      )}
    </>
  );
}

export default Banner;
