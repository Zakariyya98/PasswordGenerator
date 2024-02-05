import { useCallback, useState } from "react";
import "./CharacterToggles.scss";

const CharacterToggles = () => {
  const [upperChecked, setUpperChecked] = useState(false);
  const [lowerChecked, setLowerChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [symbolChecked, setSymbolChecked] = useState(false);

  console.log("Uppercase Checked " + upperChecked);
  console.log("Lowercase Checked " + lowerChecked);
  console.log("Numbers Checked " + numberChecked);
  console.log("Symbols Checked " + symbolChecked);

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
    </div>
  );
};

export default CharacterToggles;
