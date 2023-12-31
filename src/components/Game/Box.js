// Box.js
import React from "react";

function Box({ guess, correct }) {
  const handleColor = (letter)=>{
    if(!correct.includes(letter)) return "incorrect";
    if(correct.indexOf(letter) === guess.lastIndexOf(letter)) return "correct";
    return "misplaced";
  }
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        {guess && guess.length > 0 ? (
          guess.map((letter, boxIndex) => (
            <div
              key={boxIndex}
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid black",
                margin: "5px",
                textAlign: "center",
                lineHeight: "30px"
              }}
              className={`cell ${handleColor(letter)}`}
            >
              {letter}
            </div>
          ))
        ) : (
          Array.from({ length: 5 }, (_, boxIndex) => (
            <div
              key={boxIndex}
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid black",
                margin: "5px",
                textAlign: "center",
                lineHeight: "30px",
              }}
            >
              {/* Display any default content for blank boxes */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Box;
