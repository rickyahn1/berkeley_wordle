import React from "react";
import styled from "styled-components";

const KeyboardSection = styled.section`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const KeyboardRow = styled.div`
  width: 100%;
  margin: 0 auto 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const KeyboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  flex: 1;

  border: 0;
  border-radius: 4px;
  background-color: #818384;
  font-weight: bold;
  text-transform: uppercase;
  color: #d7dadc;

  cursor: pointer;
  user-select: none;

  &:last-of-type {
    margin: 0;
  }
`;


function Keyboard() {

    const Flex = styled.div`
        ${({ item }) => `flex: ${item};`}
    `;
    const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ];

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
        console.log(e.key);
        });
    }, []);

    const handleClick = (key) => {};

    const allKeys = keyboardRows.flat();

    return (
      <KeyboardSection>
        {keyboardRows.map((keys, i) => (
          <KeyboardRow key={i}>
            {i === 1 && <Flex item={0.5} />}
            {keys.map((key) => (
              <KeyboardButton
                key={key}
                onClick={() => handleClick(key)}
                flex={["enter", "backspace"].includes(key) ? 1.5 : 1}
              >
                {key === "backspace" ? <BackspaceIcon /> : key}
              </KeyboardButton>
            ))}
            {i === 1 && <Flex item={0.5} />}
          </KeyboardRow>
        ))}
      </KeyboardSection>
    );
};

export default Keyboard;