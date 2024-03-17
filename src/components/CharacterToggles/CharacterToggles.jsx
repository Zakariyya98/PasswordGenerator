import { useState } from "react";
import "./CharacterToggles.scss";

const CharacterToggles = ({ setCharactersToggled }) => {
  const [checkboxes, setCheckboxes] = useState({
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    Symbols: false,
  });

  const characterArrays = {
    Uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowercase: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@£$%^&*()_-+=:;<>",
  };

  const checkboxToggle = (key, checked) => {
    setCheckboxes((prevstate) => ({
      ...prevstate,
      [key]: checked,
    }));

    setCharactersToggled((prevstate) => {
      if (checked) {
        return [...prevstate, characterArrays[key]];
      } else {
        return prevstate.filter(
          (characters) => characters !== characterArrays[key]
        );
      }
    });
  };

  return (
    <div className="character-toggles__container">
      {Object.keys(checkboxes).map((key) => (
        <div key={key} className="character-toggles__checkbox--container">
          <input
            className="character-toggles__checkbox"
            type="checkbox"
            onChange={(event) => checkboxToggle(key, event.target.checked)}
          />
          <label className="character-toggles__label">
            {`Include ${key.charAt(0).toUpperCase() + key.slice(1)}`}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CharacterToggles;
