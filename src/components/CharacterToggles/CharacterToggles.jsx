import { useState } from "react";
import "./CharacterToggles.scss";
import GenerateButton from "../GenerateButton";

const CharacterToggles = (charLength) => {
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
          onClick={(event) => setUpperChecked(event.target.checked)}
        />
        <label className="character-toggles__label">
          Include Uppercase Letters
        </label>
      </div>

      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => setLowerChecked(event.target.checked)}
        />
        <label className="character-toggles__label">
          Include Lowercase Letters
        </label>
      </div>

      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => setNumberChecked(event.target.checked)}
        />
        <label className="character-toggles__label">Include Numbers</label>
      </div>

      <div className="character-toggles__checkbox--container">
        <input
          className="character-toggles__checkbox"
          type="checkbox"
          onClick={(event) => setSymbolChecked(event.target.checked)}
        />
        <label className="character-toggles__label">Include Symbols</label>
      </div>

      <div>
        <GenerateButton setChars={passwordCharacters} charLength={charLength} />
      </div>
    </div>
  );
};

export default CharacterToggles;
