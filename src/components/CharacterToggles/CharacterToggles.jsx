import { useState } from "react";
import "./CharacterToggles.scss";

const CharacterToggles = () => {
  const [upperChecked, setUpperChecked] = useState(false);
  const [lowerChecked, setLowerChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [symbolChecked, setSymbolChecked] = useState(false);

  // Testing state for the returnedPasssword
  const [returnedPassword, setReturnedPassword] = useState("");

  const characterArrays = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@£$%^&*()_-+=:;<>",
  };

  const getRandomCharFromString = (str) => {
    return str.charAt(Math.floor(Math.random() * str.length));
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
  // Move inside the function once working
  let password = "";
  const generatePasswordWithCheckedCharacters = (length) => {
    // let password = "";
    for (let i = password.length; i < length; i++)
      password += getRandomCharFromString(
        Object.values(passwordCharacters).join("")
      );
    setReturnedPassword(password);
  };

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

      <button onClick={() => generatePasswordWithCheckedCharacters(8)}>
        Click me
      </button>

      <div>
        <p>Generated Password: {returnedPassword}</p>
      </div>
    </div>
  );
};

export default CharacterToggles;
