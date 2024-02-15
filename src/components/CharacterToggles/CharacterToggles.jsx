import { useState } from "react";
import "./CharacterToggles.scss";

const CharacterToggles = ({ setCharactersToggled }) => {
  const [upperChecked, setUpperChecked] = useState(false);
  const [lowerChecked, setLowerChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [symbolChecked, setSymbolChecked] = useState(false);

  const characterArrays = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@£$%^&*()_-+=:;<>",
  };

  let passwordCharacters = [];

  if (upperChecked) {
    passwordCharacters.push(characterArrays.Uppers);
  }

  if (lowerChecked) {
    passwordCharacters.push(characterArrays.Lowers);
  }

  if (numberChecked) {
    passwordCharacters.push(characterArrays.Numbers);
  }

  if (symbolChecked) {
    passwordCharacters.push(characterArrays.Symbols);
  }

  return (
    <div className="character-toggles__container">
      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => {
            setUpperChecked(event.target.checked);
            setCharactersToggled((prevState) => {
              if (event.target.checked) {
                return [...prevState, characterArrays.Uppers];
              } else {
                return prevState.filter(
                  (characters) => characters !== characterArrays.Uppers
                );
              }
            });
          }}
        />
        <label className="character-toggles__label">
          Include Uppercase Letters
        </label>
      </div>

      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => {
            setLowerChecked(event.target.checked);
            setCharactersToggled((prevState) => {
              if (event.target.checked) {
                return [...prevState, characterArrays.Lowers];
              } else {
                return prevState.filter(
                  (characters) => characters !== characterArrays.Lowers
                );
              }
            });
          }}
        />
        <label className="character-toggles__label">
          Include Lowercase Letters
        </label>
      </div>

      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => {
            setNumberChecked(event.target.checked);
            setCharactersToggled((prevState) => {
              if (event.target.checked) {
                return [...prevState, characterArrays.Numbers];
              } else {
                return prevState.filter(
                  (characters) => characters !== characterArrays.Numbers
                );
              }
            });
          }}
        />
        <label className="character-toggles__label">Include Numbers</label>
      </div>

      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => {
            setSymbolChecked(event.target.checked);
            setCharactersToggled((prevState) => {
              if (event.target.checked) {
                return [...prevState, characterArrays.Symbols];
              } else {
                return prevState.filter(
                  (characters) => characters !== characterArrays.Symbols
                );
              }
            });
          }}
        />
        <label className="character-toggles__label">Include Symbols</label>
      </div>
    </div>
  );
};

export default CharacterToggles;
