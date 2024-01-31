import { useState } from "react";
import "./CharacterLength.scss";

const CharacterLength = () => {
  const [rangeValue, setRangeValue] = useState(8);

  return (
    <div className="char-length__container">
      <div className="char-length__range-value">
        <h1>Character Length</h1>
        <h1>{rangeValue}</h1>
      </div>
      <div>
        <input
          className="char-length__range"
          type="range"
          id="character-length"
          name="character-length"
          min="2"
          max="24"
          step="1"
          defaultValue={8}
          onChange={(event) => setRangeValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default CharacterLength;
