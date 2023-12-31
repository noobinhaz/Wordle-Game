import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import Box from "./Box";
import Result from "./Result";

const answer = sample(WORDS);
const noOfBoxes = NUM_OF_GUESSES_ALLOWED;
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState([
    { id: 1, data: "" },
    { id: 2, data: "" },
    { id: 3, data: "" },
    { id: 4, data: "" },
    { id: 5, data: "" },
    { id: 6, data: "" },
  ]);
  const [alert, setAlert] = useState(false);
  const [count, setCount] = useState(1);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      const userInput = e.target.value.toUpperCase();
      const newGuess = userInput.split("");

      setGuess((prev) => {
        let entryTo = 0;
        const updatedGuess = prev.map((each) => {
          if (each.data.length < 1 && entryTo == 0) {
            entryTo = each.id;
            return { ...each, data: [...newGuess] };
          } else {
            return each;
          }
        });
        const calc = updatedGuess.filter((each) => each.data.length > 0).length;

        if (calc > noOfBoxes) {
          setAlert(-1);
        }
        setCount(calc);

        return updatedGuess;
      });

      if (userInput === answer) {
        setAlert(1);
      }

      e.target.value = "";
    }
  };

  return (
    <>
      <div>
        {guess.map((each) => (
          <React.Fragment key={each.id}>
            <Box guess={each.data} correct={answer} />
          </React.Fragment>
        ))}
      </div>
      <div>
        <input
          type="text"
          name="guess"
          maxLength={answer.length}
          onKeyUp={handleEnterPress}
          disabled={!alert == 0}
          autoFocus
        />
      </div>
      <div>
      {alert != 0 && (
          <button
            type="submit"
            onClick={() => {
              window.location.reload();
            }}
          >
            Play Again
          </button>
        )}
        <Result alert={alert} count={count} answer={answer} />
      </div>
    </>
  );
}

export default Game;
