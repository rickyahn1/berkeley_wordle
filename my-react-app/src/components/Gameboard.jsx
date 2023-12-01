import React from "react";

const GameBoard = ({ guesses }) => {
  // const position = checkRow();
  // console.log("position is " + position);
  // const checkPostion = () => {
  //   if (position == "exact") {
  //     return "tile exact";
  //   } else if ((position = "wrong")) {
  //     return "tile wrong";
  //   } else {
  //     return "tile";
  //   }
  // };

  return (
    <>
      <div className="tile-container">
        {/* display tiles */}
        {guesses.map((guessRow, guessRowIndex) => (
          <div id={"guessRow" + guessRowIndex} key={guessRowIndex}>
            {guessRow.map((guessCol, guessIndex) => (
              <div
                className="tile"
                id={"guessRow-" + guessRowIndex + "-guessCol-" + guessIndex}
                key={guessIndex}
              >
                {guessCol}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GameBoard;