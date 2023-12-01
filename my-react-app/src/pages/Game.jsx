import { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import GameBoard from "../components/Gameboard";
import KeyBoard from "../components/Keyboard";

import '../styles/Game.css'

let words = ["Haste", "Evans", "Logic", "Glade", "Major", "Bears", "Greek", "Plaza", "Class", "Creek", "Study", "Grove"];
let word = "";

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

function Game() {
  const [guesses, setGuesses] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  let guessRows = [...guesses];

  useEffect(() => {
    // random word picker
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex].toUpperCase();
    console.log(word);
  }, []);

  const handleClick = (letter) => {
    // check game over
    checkGameOver();

    if (!isGameOver) {
      // console.log(letter);
      if (letter === "«") {
        delLetter();
        return;
      }
      if (letter === "ENTER") {
        newLine();
        return;
      }
      addLetter(letter);
    }
  };

  const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
      guessRows[currentRow][currentTile] = letter;
      setGuesses(guessRows);
      currentTile++;
    }
  };

  const delLetter = () => {
    if (currentTile > 0) {
      currentTile--;
      guessRows[currentRow][currentTile] = "";
      setGuesses(guessRows);
    }
  };

  const newLine = () => {
    if (currentTile > 4) {
      checkRow();
      if (currentRow < 5) {
        currentRow++;
        currentTile = 0;
      } else {
        isGameOver = true;
        checkGameOver();
        return;
      }
    }
  };

  const checkGameOver = () => {
    if (isGameOver) {
      toast.info("Try Again !!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const checkRow = () => {
    // count the corrent word position
    let count = 0;

    // loop the letter of current row
    guesses[currentRow].map((letter, letterId) => {
      // getting tile by id
      const tile = document.getElementById(
        "guessRow-" + currentRow + "-guessCol-" + letterId
      );

      if (word.includes(letter)) {
        //check poisition of letter
        if (letter === word[letterId]) {
          // color the exact position tile
          tile.style.backgroundColor = "#538d4e";
          tile.style.border = "none";
          count++;
        } else {
          // color the wrong position tile
          tile.style.backgroundColor = "#b59f3a";
          tile.style.border = "none";
        }
      } else {
        // color the wrong position tile
        tile.style.backgroundColor = "#3a3a3c";
        tile.style.border = "none";

        // disable key from keyboard
        guesses[currentRow].map((key) => {
          //getting keyboard key by id
          const keyButton = document.getElementById(key);
          if (letter === key) {
            keyButton.style.backgroundColor = "#3a3a3c";
            keyButton.disabled = "true";
          }
        });
      }
    });
    if (count == 5) {
      toast.success("Congratlations !!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="game-container">
        <ToastContainer />
        <div className="title-container">Wordle</div>
        <GameBoard guesses={guesses} />
        <KeyBoard guesses={guesses} handleClick={handleClick} />
      </div>
    </>
  );
}

export default Game;