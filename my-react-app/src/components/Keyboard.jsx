import React from "react";

const KeyBoard = ({ handleClick }) => {
  const keyBoard = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "«",
  ];

  return (
    <>
      <div className="key-container">
        {keyBoard.map((key, index) => (
          <button id={key} onClick={() => handleClick(key, index)} key={index}>
            {key}
          </button>
        ))}
      </div>
    </>
  );
};

export default KeyBoard;