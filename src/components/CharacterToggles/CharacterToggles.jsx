import { useState } from "react";
import "./CharacterToggles.scss";

const CharacterToggles = () => {
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

  const generatePassword = () => {
    let passwordCharacters = "";

    if (upperChecked) {
      passwordCharacters += characterArrays.Uppers;
    }

    if (lowerChecked) {
      passwordCharacters += characterArrays.Lowers;
    }

    if (numberChecked) {
      passwordCharacters += characterArrays.Numbers;
    }

    if (symbolChecked) {
      passwordCharacters += characterArrays.Symbols;
    }

    return passwordCharacters;
  };

  const password = generatePassword();

  return (
    <div className="character-toggles__container">
      <div>
        <input
          type="checkbox"
          onClick={(event) => setUpperChecked(event.target.checked)}
        />
        <label>Include Uppercase Letters</label>
      </div>

      <div>
        <input
          type="checkbox"
          onClick={(event) => setLowerChecked(event.target.checked)}
        />
        <label>Include Lowercase Letters</label>
      </div>

      <div>
        <input
          type="checkbox"
          onClick={(event) => setNumberChecked(event.target.checked)}
        />
        <label>Include Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          onClick={(event) => setSymbolChecked(event.target.checked)}
        />
        <label>Include Symbols</label>
      </div>

      <div>
        <p>Generated Password: {password}</p>
      </div>
    </div>
  );
};

export default CharacterToggles;
