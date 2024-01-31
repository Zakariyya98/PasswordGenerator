import { useState } from "react";
import "./CharacterLength.scss";

const CharacterLength = () => {
  const [rangeValue, setRangeValue] = useState(8);

  return (
    <div>
      <input
        type="range"
        id="character-length"
        name="character-length"
        min="2"
        max="24"
        step="1"
        defaultValue={8}
        onChange={(event) => setRangeValue(event.target.value)}
      />
      <p>Character Length {rangeValue}</p>
    </div>
  );
};

export default CharacterLength;
